import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DemoComponent } from './pages/demo/demo.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { StudentComponent } from './pages/student/student.component';
import { TestComponent } from './pages/test/test.component';




const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "demo",
    component : DemoComponent
  },
  {
    path : "product",
    component : ProductComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "test",
    component : TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
