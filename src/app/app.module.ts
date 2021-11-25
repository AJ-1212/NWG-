import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import{ MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './components/register/register.component';
import{ MatFormFieldModule } from '@angular/material/form-field';
import{ MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import {MatIconModule} from '@angular/material/icon'





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    DashboardComponent,
    RegisterComponent,
    AccountBalanceComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
   ReactiveFormsModule,
   MatRadioModule,
   MatNativeDateModule ,
   MatIconModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
