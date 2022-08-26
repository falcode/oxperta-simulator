import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {map, Observable, startWith, Subject, takeUntil} from 'rxjs';
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
  minFixInterest = 1.15;
  minVariableInterest = 0.45;

  private destroyed$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const controls = {
      provinces: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      savings: new FormControl('', [Validators.required]),
      years: new FormControl('', [Validators.required, Validators.min(10), Validators.max(40)]),
      typeOfInterest: new FormControl(typeOfInterest.Fijo, [Validators.required]),
      interest: new FormControl(this.minFixInterest, [Validators.required]),
    };
    this.formGroup = new FormGroup(controls);
    this.filterProvincesListener();
    this.changeInterestListener();
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
        console.log(typeOfInterest);
        this.formGroup.controls.interest.setValue(typeOfInterest === this.typeOfInterest.Fijo ? this.minFixInterest : this.minVariableInterest, {emitEvent: false} )
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

}
