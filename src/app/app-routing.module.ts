import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  
];
@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',redirectTo:'/register',pathMatch:'full'},
  
  
    {
      path:'dashboard',
      component:DashboardComponent
      
    },
    {
    path:'login',
    component:LoginComponent
    
    },
    {
      path:'nav-bar',
      component:NavBarComponent
    },
    
    {
      path:'register',
      component:RegisterComponent
    }
    
    
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
