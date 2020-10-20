import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  {
    path : "",
    component : FirstComponent
  },
  {
    path : "second",
    component : SecondComponent
  },
  {
    path : "product",
    component : ProductComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "profile",
    component : ProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "upload",
    component : UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
