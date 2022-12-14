import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContractType } from "../../shared/consts/contract-type";
import { interest } from "../../shared/consts/interests";
import { map, Observable, startWith } from "rxjs";
export enum operationViability {
  Viable,
  Complex,
  Impossible
}
@Component({
  selector: 'app-debt-unifier-simulator',
  templateUrl: './debt-unifier-simulator.component.html',
  styleUrls: ['./debt-unifier-simulator.component.scss']
})
export class DebtUnifierSimulatorComponent implements OnInit {
  formGroup: FormGroup;
  filteredContractType: Observable<string[]>;
  actualStep = 1;
  operationViability = operationViability;
  viability = operationViability.Impossible;
  minFixInterest = interest.fixed
  years = 30;
  monthly = 0;
  oldMonthly = 0;
  total = 0;

  ngOnInit(): void{
    this.initForm();
  }

  private initForm(): void {
    const controls = {
      leftMortgage: new FormControl('', [Validators.required]),
      monthlyMortgage: new FormControl('', [Validators.required]),
      totalMortgage: new FormControl('', [Validators.required]),
      leftDebts: new FormControl('', [Validators.required]),
      monthlyDebts: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      monthlyEarnings: new FormControl('', [Validators.required]),
      numberOfPays: new FormControl('', [Validators.required]),
      contractType: new FormControl('', [Validators.required]),
    };
    this.formGroup = new FormGroup(controls);
    this.filteredContractTypeListener();
  }

  private filteredContractTypeListener(): void {
    this.filteredContractType = this.formGroup.controls.contractType.valueChanges.pipe(
      startWith(''),
      map(value => this._filterContractType(value || '')),
    );
  }

  private _filterContractType(value: string): string[] {
    const filterValue = value.toLowerCase();

    return ContractType.filter(option => option.toLowerCase().includes(filterValue));
  }

  stepForward(): void {
    if (this.actualStep === 3) {
      this.calcOperation();
    } else {
      this.resetValues();
    }
    this.actualStep++;
  }

  stepBack(): void {
    this.actualStep--;
    this.resetValues();
  }

  resetValues() {
    this.viability = operationViability.Impossible;
    this.oldMonthly = 0
    this.monthly = 0;
    this.total = 0;
  }

  private calcOperation(): void {
    this.viability = operationViability.Viable;
    const formControl = this.formGroup.controls;
    const limitAge = '60';
    // AGE Check
    if (formControl.age.value.toString() > limitAge) {
      this.viability = operationViability.Impossible;
      return;
    }

    // SUM Total Debts
    const totalDebt = formControl.leftMortgage.value + formControl.leftDebts.value;
    const houseValue = formControl.totalMortgage.value;
    const ninetyPercent = (90 / 100) * houseValue;
    const eightyPercent = (80 / 100) * houseValue;
    if (totalDebt >= eightyPercent && totalDebt <= ninetyPercent) {
      this.viability = operationViability.Complex;
    } else if (totalDebt > ninetyPercent) {
      this.viability = operationViability.Impossible;
      return;
    }

    // Job Contract
    const jobContractType = formControl.contractType.value;
    if (jobContractType !== 'Indefinido' && jobContractType !== 'Autónomo' && jobContractType !== 'Funcionario') {
      this.viability = operationViability.Impossible;
      return;
    }

    // Debts Ratio
    const totalMonthlyPayment = formControl.monthlyDebts.value + formControl.monthlyMortgage.value;
    const monthlyEarnings = formControl.monthlyEarnings.value;
    const thirtyThreePercent = (33 / 100) * monthlyEarnings;
    const fourtyFivePercent = (45 / 100) * monthlyEarnings;
    if (totalMonthlyPayment >= thirtyThreePercent && totalMonthlyPayment <= fourtyFivePercent) {
      this.viability = operationViability.Complex;
    } else if (totalMonthlyPayment > fourtyFivePercent) {
      this.viability = operationViability.Impossible;
      return;
    }

    this.calcTotalMortgage(formControl.leftMortgage.value, formControl.monthlyMortgage.value, formControl.leftDebts.value, formControl.monthlyDebts.value);

  }

  private calcTotalMortgage(leftMortgage: number, monthlyMortgage: number, leftDebts: number, monthlyDebts: number): void {
    const months = Math.floor(Math.max(leftMortgage/monthlyMortgage, leftDebts/monthlyDebts));
    const monthlyInterest = (this.minFixInterest / 100) / 12;
    const actualValue = (leftMortgage + leftDebts);
    this.oldMonthly = Math.round(monthlyMortgage + monthlyDebts);
    this.monthly = Math.round((actualValue * monthlyInterest) / ( 1 - Math.pow(( 1 + monthlyInterest ), -months) ));
    this.total = Math.round(this.oldMonthly - this.monthly);
  }

}
