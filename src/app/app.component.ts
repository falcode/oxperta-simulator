import { Component, OnInit } from '@angular/core';
import { EuriborService } from './api/services/euribor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private euriborService: EuriborService) {}
  ngOnInit(): void {
    this.euriborService.setEuribor();
  }

  title = 'oxperta-simulator';
  
}
