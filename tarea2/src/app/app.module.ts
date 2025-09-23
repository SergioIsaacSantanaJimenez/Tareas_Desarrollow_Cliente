import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { PanelIzquierdoComponent } from './panel-izquierdo/panel-izquierdo.component';
import { PanelDerechoComponent } from './panel-derecho/panel-derecho.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    PanelIzquierdoComponent,
    PanelDerechoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }