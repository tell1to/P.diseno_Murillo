<<<<<<< HEAD
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormsNGComponent } from './components/forms-ng/forms-ng.component';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
>>>>>>> 2640a0ec064b516ed2ad87dc13bc058b10ef65bb
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
<<<<<<< HEAD
 import { FormsModule } from '@angular/forms';
 import { CheckboxModule } from 'primeng/checkbox'
 import { InputTextModule } from 'primeng/inputtext';
 import { ColorPickerModule } from 'primeng/colorpicker';
 import { AnimateModule } from 'primeng/animate';
 import { ContextMenuModule } from 'primeng/contextmenu';
  import { DataViewModule } from 'primeng/dataview';
  import { VirtualScrollerModule } from 'primeng/virtualscroller';
=======
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormsNGComponent } from './components/forms-ng/forms-ng.component';

>>>>>>> 2640a0ec064b516ed2ad87dc13bc058b10ef65bb



@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component,
    CardsComponent,
    HomeComponent,
    GalleryComponent,
    FormsNGComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, 
    ButtonModule,
    ToolbarModule, 
<<<<<<< HEAD
    AvatarModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    ColorPickerModule,
    AnimateModule,
    ContextMenuModule, 
    DataViewModule,
    VirtualScrollerModule
=======
    AvatarModule
>>>>>>> 2640a0ec064b516ed2ad87dc13bc058b10ef65bb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
