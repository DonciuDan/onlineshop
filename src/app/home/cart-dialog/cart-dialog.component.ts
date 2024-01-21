import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatCardModule,
    NgForOf,
    MatIconModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.css'
})
export class CartDialogComponent {
  items: Array<any> = [];

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Array<any>) => {
      this.items = [];

      this.items = items;

      console.log(items)
    });
  }

  public onDeleteCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  public onBuy() {
    this.cartService.createCart()
  }
}
