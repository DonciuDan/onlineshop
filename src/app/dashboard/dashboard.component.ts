import {Component} from '@angular/core';
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";

@Component({
  selector: 'app-dashboard', // poti pune ce vrei tu aici la selector, e doar un nume ca sa stie la ce faci referire
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent
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
}
