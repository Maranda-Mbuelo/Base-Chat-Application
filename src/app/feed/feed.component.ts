import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/services/chat.service'; 
import { ChatMessage } from '../Models/chat-message.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  chatMessages: ChatMessage[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.chatService.getMessages().subscribe((messages) => {
      console.log('Retrieved Messages:', messages);
      this.chatMessages = messages;
    });
  }  
}
