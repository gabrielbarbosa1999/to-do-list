import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RadapeComponent } from './radape/radape.component';
import { FormListComponent } from './list/form-list/form-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RadapeComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
