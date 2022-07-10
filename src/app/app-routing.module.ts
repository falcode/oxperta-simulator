import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'simulador-hipotecas',
    data: {title: ['Hipotecas']},
    loadChildren: () => import('./features/mortgage-simulator/mortgage-simulator.module').then(m => m.MortgageSimulatorModule),
  },
  {
    path: 'reunificacion-deudas',
    data: {title: ['Deudas']},
    loadChildren: () => import('./features/debt-unifier-simulator/debt-unifier-simulator.module').then(m => m.DebtUnifierSimulatorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
