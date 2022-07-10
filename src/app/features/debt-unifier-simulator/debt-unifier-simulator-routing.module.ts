import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DebtUnifierSimulatorComponent } from './debt-unifier-simulator.component';


const routes: Routes = [
  {
    path: '',
    component: DebtUnifierSimulatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebtUnifierSimulatorRoutingModule {
}
