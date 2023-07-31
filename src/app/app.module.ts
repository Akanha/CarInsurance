import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PremiumComponent } from './premium/premium.component';
import { LoginPremiumComponent } from './login-premium/login-premium.component';
import { PaymentComponent } from './payment/payment.component';
import { ApproveComponent } from './approve/approve.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    SignupComponent,
    HomeComponent,
    PremiumComponent,
    LoginPremiumComponent,
    PaymentComponent,
    ApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
