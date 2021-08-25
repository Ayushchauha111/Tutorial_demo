import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateTuorialComponent } from './create-tuorial/create-tuorial.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';
import { DeleteTutorialComponent } from './delete-tutorial/delete-tutorial.component';
import { ViewTutorialComponent } from './view-tutorial/view-tutorial.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ImportComponent } from './import/import.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    CreateTuorialComponent,
    UpdateTutorialComponent,
    DeleteTutorialComponent,
    ViewTutorialComponent,
    LoginComponent,
    SignupComponent,
    ImportComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
