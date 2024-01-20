import {Component} from '@angular/core';
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";

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
    MatToolbarModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  itemdata: any;

  onChageItem(item: any) {
    console.log("Item a ajuns in dashboard");
    console.log(item);
    this.itemdata = item; // salvam itemul primit in componenta de dashboard
  }

  constructor(private router:Router) {

  }

  onHome(){
    this.router.navigate(['/','home']);
  }

  onLogOut(){
    this.router.navigate(['/','auth']);
  }
}
