import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mortgage-payments',
  templateUrl: './mortgage-payments.component.html',
  styleUrls: ['./mortgage-payments.component.scss']
})
export class MortgagePaymentsComponent {

  @Input() viability = false;
  @Input() monthly: number = 0;
  @Input() interest: string = '';
  @Input() total: number = 0;

  constructor() { }

}
