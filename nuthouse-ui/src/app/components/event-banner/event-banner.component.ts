import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-banner',
  standalone: true,
  imports: [],
  templateUrl: './event-banner.component.html',
  styleUrl: './event-banner.component.scss'
})
export class EventBannerComponent {
  @Input() eventText: string;
}
