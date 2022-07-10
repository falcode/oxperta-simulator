import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IConfig, NgxMaskModule } from 'ngx-mask';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  showMaskTyped: false
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
