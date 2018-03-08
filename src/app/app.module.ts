import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NgbdTabsetJustify } from './tabset-justify';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MenuAccordianComponent } from './menu-accordian/menu-accordian.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { FoodanddrinksComponent } from './foodanddrinks/foodanddrinks.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { PctComponent } from './pct/pct.component';
import { FindusComponent } from './findus/findus.component';
import { EventsAndMediaComponent } from './events-and-media/events-and-media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fooddrink', component: FoodanddrinksComponent },
  { path: 'pct', component: PctComponent },
  { path: 'findus', component: FindusComponent },
  { path: 'EventsAndMedia', component: EventsAndMediaComponent },
  { path: 'ContactUs', component: ContactUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NgbdTabsetJustify,
    HeaderComponentComponent,
    MenuAccordianComponent,
    GuestbookComponent,
    FoodanddrinksComponent,
    HomeComponent,
    PctComponent,
    FindusComponent,
    EventsAndMediaComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
