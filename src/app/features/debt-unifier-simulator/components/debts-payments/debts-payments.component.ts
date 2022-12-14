import { Component, Input } from '@angular/core';
import { operationViability } from '../../debt-unifier-simulator.component';

@Component({
  selector: 'app-debts-payments',
  templateUrl: './debts-payments.component.html',
  styleUrls: ['./debts-payments.component.scss']
})
export class DebtsPaymentsComponent {

  operationViability = operationViability;
  @Input() viability = operationViability.Impossible;
  @Input() monthly: number = 0;
  @Input() oldMonthly: number = 0;
  @Input() total: number = 0;

  constructor() { }

}
