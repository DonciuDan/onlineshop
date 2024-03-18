import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatButtonModule
  ],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {

  orders: Array<any> = [];

  constructor(private cartService: CartService) {
    this.cartService.getAllCartsFromServer().subscribe((orderList:Array<any>) => {
      this.orders = orderList;
    })
  }

  onDelete(order:any){
    this.cartService.deleteCart(order.id);
  }



}
