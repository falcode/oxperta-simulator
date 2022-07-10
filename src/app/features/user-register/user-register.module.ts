import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';



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
  ],
  exports: [
    UserRegisterComponent
  ]
})
export class UserRegisterModule { }
