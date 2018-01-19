import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NgbdTabsetJustify } from './tabset-justify';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MenuAccordianComponent } from './menu-accordian/menu-accordian.component';


@NgModule({
  declarations: [
    AppComponent,
    NgbdTabsetJustify,
    HeaderComponentComponent,
    MenuAccordianComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
