import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
