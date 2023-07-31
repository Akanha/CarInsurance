import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PremiumComponent } from './premium/premium.component';
import { LoginPremiumComponent } from './login-premium/login-premium.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { ApproveComponent } from './approve/approve.component';

const routes: Routes = [
  {path:"list",component:ListComponent,children:[
    {path:"premium",component:PremiumComponent}]},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"loginPremium",component:LoginPremiumComponent},
  {path:"payment",component:PaymentComponent},
  {path:"admin",component:AdminComponent},
  {path:"approve",component:ApproveComponent},
  {path:"**",redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
