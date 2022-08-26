import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  formGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const controls = {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.min(4)]),
      terms: new FormControl('', [Validators.required]),
      publicity: new FormControl(''),
    };
    this.formGroup = new FormGroup(controls);
  }


}
