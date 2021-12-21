import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InteractiveComponent } from './interactive/interactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    InteractiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }