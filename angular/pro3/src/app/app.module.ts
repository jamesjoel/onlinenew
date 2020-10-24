import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { HelloDirective } from './directives/hello.directive';
import { UploadComponent } from './pages/upload/upload.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({  
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ProductComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    DiscountPipe,
    HelloDirective,
    UploadComponent,
    RegistrationComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
  1. only component can create 4 file (.html, .scss, .ts, .spec.ts)
      ng g c <compoent name>
      when compoent create its insert into "declarations" array in module file
      
      
      
      2. when service create its not insert any array in module.(.ts, .spec.ts)
      ng g s <service name>
      "only server you can craete your custome function"


      
      
      3. when create "guard" then create 2 file (.ts, .spec.ts)
      ng g g <guard name>
      "guard" not insert into module but its insert into "routing module"
      canActivate()



      4. when create pipe (.ts, .spec.ts)
      ng g p <pipe name>
      when pipe create its insert into "declarations" array in module file
      transform()














*/
