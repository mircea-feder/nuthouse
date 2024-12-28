import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  constructor(protected _router: Router) { }
}
