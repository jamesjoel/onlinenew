import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { Box1Component } from './shared/box1/box1.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HelpComponent } from './pages/help/help.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DemoComponent } from './pages/demo/demo.component';
import { ProductComponent } from './pages/product/product.component';
import { StudentComponent } from './pages/student/student.component';
import { MiniboxComponent } from './shared/minibox/minibox.component';
import { TestComponent } from './pages/test/test.component';
import { MinitestComponent } from './shared/minitest/minitest.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Box1Component,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    EmployeeComponent,
    DemoComponent,
    ProductComponent,
    StudentComponent,
    MiniboxComponent,
    TestComponent,
    MinitestComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
