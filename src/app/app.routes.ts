import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth/auth.guard";
import {AntrenamenteComponent} from "./antrenamente/antrenamente.component";
import {NutritieComponent} from "./nutritie/nutritie.component";
import {EchipamentSportivComponent} from "./echipament-sportiv/echipament-sportiv.component";
import {SuplimenteComponent} from "./suplimente/suplimente.component";
import {SalaComponent} from "./sala/sala.component";


export const routes: Routes = [
  {
    path:"auth",component:AuthComponent,
  },
  {
    path:"home",component:HomeComponent,
  },
  {
    path:"antrenamente",component:AntrenamenteComponent,
  },
  {
    path:"nutritie",component:NutritieComponent,
  },
  {
    path:"echipament-sportiv",component:EchipamentSportivComponent,
  },
  {
    path:"suplimente",component:SuplimenteComponent,
  },
  {
    path:"sala",component:SalaComponent,
  },
  {
    path:"dashboard",component:DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  }
];
