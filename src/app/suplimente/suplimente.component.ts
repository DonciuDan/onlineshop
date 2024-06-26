import { Component } from '@angular/core';
import {CartButtonComponent} from "../home/cart-button/cart-button.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ListItemsComponent} from "../list-items/list-items.component";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-suplimente',
  standalone: true,
  imports: [
    CartButtonComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    NgIf,
    ListItemsComponent
  ],
  templateUrl: './suplimente.component.html',
  styleUrl: './suplimente.component.css'
})
export class SuplimenteComponent {
  constructor(private router: Router, private userService: UserService, private itemService:ItemService) {
    itemService.readItemsByCategory("Suplimente")
  }

  isUserAdmin() {
    if (this.userService.getLoggedUser() != null && this.userService.getLoggedUser().userRole == "ADMIN") {
      return true;
    }
    return false;
  }

  isUser() {
    if (this.userService.getLoggedUser() != null && (this.userService.getLoggedUser().userRole == "ADMIN" || this.userService.getLoggedUser().userRole == "CUSTOMER")) {
      return true;
    }
    return false;
  }

  onDashboard() {
    this.router.navigate(['/', 'dashboard']);
  }

  onLogIn() {
    this.router.navigate(['/', 'auth']);
  }

  onLogOut() {
    this.router.navigate(['/', 'auth']);
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
