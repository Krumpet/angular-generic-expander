import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyExpanderComponent } from './my-expander/my-expander.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyExpanderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
