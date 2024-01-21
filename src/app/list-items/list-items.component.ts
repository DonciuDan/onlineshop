import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemService} from "../services/item.service";
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  @Output() changeData = new EventEmitter<any>(); //este un obiect din angular care ne ajuta sa trimitem un obiect in afara componentei
  items: Array<any> = [];
  @Input("isAdmin") isAdmin: boolean = false;

  constructor(private itemService: ItemService, private cartService: CartService) {
    this.itemService.getItemList().subscribe((itemsList: Array<any>) => {
      this.items = itemsList; // prin acest subscribe ne asiguram ca vom primi notificari despre lista in timp real
      //subscribe se actualizeaza lista automat
    })

  }

  onEdit(item: any) { //din list-items trebuie sa ajung in componenta add-edit si trebuie sa o fac prin dashboard
    this.changeData.emit(item) //asa schimbam datele
  }

  onDelete(item: any) { //asa trebuie sa il mentionam acum (parametru)
    console.log(item);
    this.itemService.deleteItem(item); // trimitem item-ul pe care il vrem modifica - in cazul asta item reprezinta un card
  }

  onBuy(item: any) {
    this.cartService.addToCart(item);
  }
}
