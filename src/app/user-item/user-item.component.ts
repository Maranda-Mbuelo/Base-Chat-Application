import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() username!: string;
  @Input() avatarUrl!: string;
  @Input() timeSent!: string; // Add the input property for timeSent
}
