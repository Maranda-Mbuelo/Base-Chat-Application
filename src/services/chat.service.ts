import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Correct import for AngularFireDatabase
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/Models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private db: AngularFireDatabase) {}

  sendMessage(message: string): void {
    if (message.trim() !== '') {
      const timeStamp = this.getTimeStamp();
      const email = 'dummyemail@example.com'; // Replace this with the authenticated user's email from Firebase Auth
      this.db.list('messages').push({
        message,
        timeSent: timeStamp,
        username: 'Mbuelo Maranda', // Replace this with the authenticated user's username from Firebase Auth
        email: email
      });
    }
  }

  getTimeStamp(): any {
    return new Date().toISOString();
  }

  getMessages(): Observable<ChatMessage[]> {
    return this.db.list<ChatMessage>('messages', (ref) =>
      ref.limitToLast(25).orderByKey()
    ).valueChanges();
  }
}
