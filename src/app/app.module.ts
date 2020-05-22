import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NgxFileDropModule } from "ngx-file-drop";
import { MustMatchDirective } from './_helpers/must-match.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
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
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fooddrink', component: FoodanddrinksComponent },
  { path: 'pct', component: PctComponent },
  { path: 'findus', component: FindusComponent },
  { path: 'EventsAndMedia', component: EventsAndMediaComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'FileUpload', component: FileUploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MenuAccordianComponent,
    GuestbookComponent,
    FoodanddrinksComponent,
    HomeComponent,
    PctComponent,
    FindusComponent,
    EventsAndMediaComponent,
    ContactUsComponent,
    FileUploadComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgxFileDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
