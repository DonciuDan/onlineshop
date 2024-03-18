import {Component} from '@angular/core';
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {ListOrdersComponent} from "./list-orders/list-orders.component";


@Component({
  selector: 'app-dashboard', // poti pune ce vrei tu aici la selector, e doar un nume ca sa stie la ce faci referire
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    AddEditUserComponent,
    ListUsersComponent,
    ListOrdersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  itemData: any;
  userData: any;

  onChageItem(item: any) {
    console.log("Item a ajuns in dashboard");
    console.log(item);
    this.itemData = item; // salvam itemul primit in componenta de dashboard
  }

  onChangeUser(user: any){
    console.log("Userul a ajuns in dashboard");
    console.log(user);
    this.userData = user;
  }
  constructor(private router:Router) {

  }

  onHome(){
    this.router.navigate(['/','home']);
  }

  onLogOut(){
    this.router.navigate(['/','auth']);
  }

  onAntrenamente() {
    this.router.navigate(['/', 'antrenamente']);
  }
  onEchipamenteSportive() {
    this.router.navigate(['/', 'echipament-sportiv']);
  }
  onSala() {
    this.router.navigate(['/', 'sala']);
  }
  onSuplimente() {
    this.router.navigate(['/', 'suplimente']);
  }
  onNutritie() {
    this.router.navigate(['/', 'nutritie']);
  }

  onLogo(){
    this.router.navigate(["/","home"])
  }

}
