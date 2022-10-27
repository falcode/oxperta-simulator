import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtUnifierSimulatorComponent } from './debt-unifier-simulator.component';
import { DebtUnifierSimulatorRoutingModule } from './debt-unifier-simulator-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {NgxMaskModule} from "ngx-mask";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { UserRegisterModule } from '../user-register/user-register.module';



@NgModule({
  declarations: [
    DebtUnifierSimulatorComponent
  ],
  imports: [
    CommonModule,
    DebtUnifierSimulatorRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    NgxMaskModule,
    MatAutocompleteModule,
    UserRegisterModule,
  ],
  exports: [
    DebtUnifierSimulatorComponent
  ]
})
export class DebtUnifierSimulatorModule { }
