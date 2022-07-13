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
import { HostMainComponent } from './host-main/host-main.component';
import { HostChildComponent } from './host-child/host-child.component';
import { EmptyComponent } from './empty/empty.component';
import { LifeCycle1ParentComponent } from './life-cycle1-parent/life-cycle1-parent.component';
import { LifeCycle1ChildComponent } from './life-cycle1-child/life-cycle1-child.component';
import { LifeCycle2ParentComponent } from './life-cycle2-parent/life-cycle2-parent.component';
import { LifeCycle2ChildComponent } from './life-cycle2-child/life-cycle2-child.component';
import { LifeCycle3ParentComponent } from './life-cycle3-parent/life-cycle3-parent.component';
import { LifeCycle3ChildComponent } from './life-cycle3-child/life-cycle3-child.component';


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
    SecondChildComponent,
    HostMainComponent,
    HostChildComponent,
    EmptyComponent,
    LifeCycle1ParentComponent,
    LifeCycle1ChildComponent,
    LifeCycle2ParentComponent,
    LifeCycle2ChildComponent,
    LifeCycle3ParentComponent,
    LifeCycle3ChildComponent
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
