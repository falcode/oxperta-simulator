import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forChild(),
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserRegisterComponent
  ]
})
export class UserRegisterModule { }
