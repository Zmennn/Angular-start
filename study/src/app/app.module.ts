import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InteractiveComponent } from './interactive/interactive.component';
import { InputComponent } from './input/input.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    InteractiveComponent,
    InputComponent,
    FormsModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
