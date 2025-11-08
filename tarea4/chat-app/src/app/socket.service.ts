import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  connect(username: string): void {
    this.socket.emit('user_connected', username);
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  receiveMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    });
  }

  receiveUserConnected(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('user_connected', (username) => {
        observer.next(username);
      });
    });
  }
}