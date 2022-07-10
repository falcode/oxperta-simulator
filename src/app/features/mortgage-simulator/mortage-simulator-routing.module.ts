import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MortgageSimulatorComponent } from './mortgage-simulator.component';


const routes: Routes = [
  {
    path: '',
    component: MortgageSimulatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortageSimulatorRoutingModule {
}
