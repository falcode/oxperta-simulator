import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtUnifierSimulatorComponent } from './debt-unifier-simulator.component';
import { DebtUnifierSimulatorRoutingModule } from './debt-unifier-simulator-routing.module';



@NgModule({
  declarations: [
    DebtUnifierSimulatorComponent
  ],
  imports: [
    CommonModule,
    DebtUnifierSimulatorRoutingModule
  ],
  exports: [
    DebtUnifierSimulatorComponent
  ]
})
export class DebtUnifierSimulatorModule { }
