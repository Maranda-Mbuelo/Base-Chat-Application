import { Component } from '@angular/core';
import { ChatService } from 'src/services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {
  message: string = '';

  constructor(private chatService: ChatService) {}

  send(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

  handleSubmit(event: any): void {
    if (event.keyCode === 13) {
      this.send();
    }
  }
}
