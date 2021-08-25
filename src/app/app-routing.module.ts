import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTuorialComponent } from './create-tuorial/create-tuorial.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { UpdateTutorialComponent } from './update-tutorial/update-tutorial.component';
import { ViewTutorialComponent } from './view-tutorial/view-tutorial.component';
import {AuthenticationGuard} from './authentication.guard'
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
const routes: Routes = [
  {path:'tutorials', component:TutorialListComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'createTutorial',component:CreateTuorialComponent,canActivate:[AuthenticationGuard],data:{role:"admin"}},
  {path:'updateTutorial/:id',component:UpdateTutorialComponent},
  {path:'viewTutorial/:id',component:ViewTutorialComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  { path: '**', component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
