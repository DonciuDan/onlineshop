import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddEditItemComponent} from "./dashboard/add-edit-item/add-edit-item.component";
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-root', //un selector reprezinta modul de apelare al componentei (este un tag de html)
  standalone: true,
  imports: [CommonModule, RouterOutlet, DashboardComponent, AddEditItemComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlineshop';
}
