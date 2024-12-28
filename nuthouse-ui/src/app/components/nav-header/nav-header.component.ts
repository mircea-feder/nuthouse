import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {Button} from "primeng/button";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [
    MenubarModule,
    NavMenuComponent,
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]
  }
}
