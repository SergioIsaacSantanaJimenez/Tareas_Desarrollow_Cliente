import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [SocketService]
})
export class AppComponent implements OnInit {
  username: string = '';
  message: string = '';
  messages: any[] = [];
  connected: boolean = false;

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.receiveMessage().subscribe((data) => {
      this.messages.push(data);
    });

    this.socketService.receiveUserConnected().subscribe((username) => {
      this.messages.push({
        username: 'Sistema',
        message: `${username} se ha conectado`,
        timestamp: new Date()
      });
    });
  }

  connectUser(): void {
    if (this.username.trim()) {
      this.connected = true;
      this.socketService.connect(this.username);
    }
  }

  sendMessage(): void {
    if (this.message.trim() && this.connected) {
      const data = {
        username: this.username,
        message: this.message,
        timestamp: new Date()
      };
      this.socketService.sendMessage(data);
      this.message = '';
    }
  }
}