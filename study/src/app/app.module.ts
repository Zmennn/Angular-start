import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InteractiveComponent } from './interactive/interactive.component';
import { InputComponent } from './input/input.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { StayleToggleComponent } from './stayle-toggle/stayle-toggle.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { SpinerComponent } from './spiner/spiner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SecondChildComponent } from './second-child/second-child.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    InteractiveComponent,
    InputComponent,
    FormsModuleComponent,
    StayleToggleComponent,
    GalleryComponent,
    GalleryItemComponent,
    SpinerComponent,
    ParentComponent,
    ChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
