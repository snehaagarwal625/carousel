import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import{SliderComponent} from '../app/header/slider/slider.component';
import { DisplayComponent } from './header/slider/display/display.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    DisplayComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
