import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageSimulatorComponent } from './mortgage-simulator.component';
import { NgxMaskModule } from 'ngx-mask';
import { MortageSimulatorRoutingModule } from './mortage-simulator-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterModule } from '../user-register/user-register.module';
import { MortgagePaymentsComponent } from './components/mortgage-payments/mortgage-payments.component';



@NgModule({
  declarations: [
    MortgageSimulatorComponent,
    MortgagePaymentsComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule,
    MortageSimulatorRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    MatSelectModule,
    MatAutocompleteModule,
    UserRegisterModule,

  ],
  exports: [
    MortgageSimulatorComponent
  ]
})
export class MortgageSimulatorModule { }
