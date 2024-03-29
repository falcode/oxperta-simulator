import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { EuriborService } from 'src/app/api/services/euribor.service';
import { interest } from 'src/app/shared/consts/interests';
import { Provinces } from '../../shared/consts/provinces';
enum typeOfInterest {
  Fijo = 'Fijo',
  Variable = 'Variable'
}

@Component({
  selector: 'app-mortgage-simulator',
  templateUrl: './mortgage-simulator.component.html',
  styleUrls: ['./mortgage-simulator.component.scss']
})
export class MortgageSimulatorComponent implements OnInit, OnDestroy {
  provinces = Provinces;
  filteredProvinces: Observable<string[]>;
  formGroup: FormGroup;
  typeOfInterest = typeOfInterest;
  minFixInterest = interest.fixed
  minVariableInterest = interest.variable
  euribor = 0;
  viability = false;
  monthly: number = 0;
  total: number = 0;
  interest: string = '';

  private destroyed$ = new Subject<void>();

  constructor(private euriborService: EuriborService) { }

  async ngOnInit(): Promise<void> {
    await this.initForm();
  }

  async initForm(): Promise<void> {
    const controls = {
      provinces: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      savings: new FormControl('', [Validators.required]),
      years: new FormControl('', [Validators.required, Validators.min(10), Validators.max(40)]),
      typeOfInterest: new FormControl(typeOfInterest.Fijo, [Validators.required]),
      interest: new FormControl(this.minFixInterest, [Validators.required]),
    };
    this.formGroup = new FormGroup(controls);
    this.euribor = await this.euriborService.setEuribor();
    this.filterProvincesListener();
    this.changeInterestListener();
    this.listenValidation();
  }

  private filterProvincesListener(): void {
    this.filteredProvinces = this.formGroup.controls.provinces.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProvinces(value || '')),
    );
  }

  private _filterProvinces(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.provinces.filter(option => option.toLowerCase().includes(filterValue));
  }

  private changeInterestListener(): void {
    this.formGroup.controls.typeOfInterest.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(typeOfInterest => {
        this.formGroup.controls.interest.setValue(typeOfInterest === this.typeOfInterest.Fijo ? this.minFixInterest : this.minVariableInterest, { emitEvent: false })
      });
  }

  private listenValidation(): void {
    this.formGroup.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(form => {
        this.viability = this.formGroup.valid && (form.savings < (form.price * 0.8))
        if (this.viability) {
          this.calcTotalMortgage(form.price, form.savings, form.years, form.interest);
        } else {
          this.monthly = 0;
          this.total = 0;
        }
      });
  }

  checkInterest(): void {
    const interest = this.formGroup.controls.interest.value;
    const typeOfInterest = this.formGroup.controls.typeOfInterest.value;

    if (typeOfInterest === this.typeOfInterest.Fijo) {
      if (interest < this.minFixInterest) {
        this.formGroup.controls.interest.setValue(this.minFixInterest)
      }
    } else {
      if (interest < this.minVariableInterest) {
        this.formGroup.controls.interest.setValue(this.minVariableInterest)
      }
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private calcTotalMortgage(housePrice: number, savings: number, years: number, interest: number): void {
    const months = years * 12;
    let interestToCalc = interest;
    if (this.formGroup.controls.typeOfInterest.value === this.typeOfInterest.Variable) {
      interestToCalc += this.euribor;
      this.interest = ((interestToCalc / 100) * 100).toFixed(2);
    } else {
      this.interest = '';
    }
    const monthlyInterest = (interestToCalc / 100) / 12;
    const actualValue = (housePrice - savings);
    this.monthly = Math.round((actualValue * monthlyInterest) / (1 - Math.pow((1 + monthlyInterest), -months)));
    this.total = Math.round(housePrice - savings);
  }
}
