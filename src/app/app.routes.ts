import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddEditItemComponent} from "./dashboard/add-edit-item/add-edit-item.component";

export const routes: Routes = [
  {
    path:"auth",component:AuthComponent,
  },
  {
    path:"home",component:HomeComponent,
  },
  {
    path:"dashboard",component:DashboardComponent,
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  }
];
