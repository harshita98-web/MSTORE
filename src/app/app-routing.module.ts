import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {path: "" , component : HomePageComponent},
  {path: "login-page" , component : LoginPageComponent},
  {path: "products/:id" , component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
