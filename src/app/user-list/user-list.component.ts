import { Component } from '@angular/core';

interface User {
  displayName: string;
  avatar: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    { displayName: 'Mbuelo Maranda', avatar: 'https://via.placeholder.com/50' },
    { displayName: 'Britt M', avatar: 'https://via.placeholder.com/50' },
    { displayName: 'Mike Dane', avatar: 'https://via.placeholder.com/50' },
    // Add more users as needed
  ];
}
