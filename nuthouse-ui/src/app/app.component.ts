import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavHeaderComponent} from "./components/nav-header/nav-header.component";
import {ContactFooterComponent} from "./components/contact-footer/contact-footer.component";
import {EventBannerComponent} from "./components/event-banner/event-banner.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavHeaderComponent, ContactFooterComponent, EventBannerComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'nuthouse-ui';
  // REVELION, CRACIUN, EVENIMENT
  eventText: string = '';
}
