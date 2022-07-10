import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith, take } from 'rxjs';
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
export class MortgageSimulatorComponent implements OnInit {
  provinces = Provinces;
  filteredProvinces: Observable<string[]>;
  formGroup: FormGroup;
  typeOfInterest = typeOfInterest;
  minFixInterest = 1.15

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
    this.http.get('http://www.euribordiario.es/ajaxc.php').pipe(take(1)).subscribe(e => console.log(e));
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

  checkInterest(): void {
    const interest = this.formGroup.controls.interest.value;
    const typeOfInterest = this.formGroup.controls.typeOfInterest.value;
    if (typeOfInterest === this.typeOfInterest.Fijo) {
      if (interest < this.minFixInterest)
      this.formGroup.controls.interest.setValue(this.minFixInterest)
    }
  }

}
