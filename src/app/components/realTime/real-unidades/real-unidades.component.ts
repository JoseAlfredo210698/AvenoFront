import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';


export class Message {
  constructor(
    public sender: string,
    public content: string,
    public isBroadcast = false,
  ) { }
}

import makeWebSocketObservable, {
  GetWebSocketResponses,
  // WebSocketPayload = string | ArrayBuffer | Blob
  // WebSocketPayload,
  normalClosureMessage,
} from 'rxjs-websockets'


@Component({
  selector: 'app-real-unidades',
  templateUrl: './real-unidades.component.html',
  styleUrls: ['./real-unidades.component.css']
})
export class RealUnidadesComponent implements OnInit {

  @ViewChild('viewer') private viewer: ElementRef;

  public serverMessages = new Array<Message>();

  private socket$: WebSocketSubject<Message>;

  public clientMessage = '';
  public isBroadcast = false;
  public sender = '';

  constructor() {
    // this.socket$ = WebSocketSubject.create('http://134.209.76.81:3000');

    // this.socket$
    //   .subscribe(
    //     (message) => this.serverMessages.push(message),
    //     (err) => console.error(err),
    //     () => console.warn('Completed!')
    //   );

  }
  ngOnInit() {
    // this.socket$
    //   .subscribe(
    //     (message) => this.serverMessages.push(message),
    //     (err) => console.error(err),
    //     () => console.warn('Completed!')
    //   );
    // this.scroll();
  }

  // ngAfterViewInit(): void {
  //   this.scroll();
  // }

  // public toggleIsBroadcast(): void {
  //   this.isBroadcast = !this.isBroadcast;
  // }

  // public send(): void {
  //   const message = new Message(this.sender, this.clientMessage, this.isBroadcast);

  //   this.serverMessages.push(message);
  //   this.socket$.next(message);
  //   this.clientMessage = '';
  //   this.scroll();
  // }

  // public isMine(message: Message): boolean {
  //   return message && message.sender === this.sender;
  // }

  // public getSenderInitials(sender: string): string {
  //   return sender && sender.substring(0, 2).toLocaleUpperCase();
  // }

  // public getSenderColor(sender: string): string {
  //   const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ';
  //   const initials = this.getSenderInitials(sender);
  //   const value = Math.ceil((alpha.indexOf(initials[0]) + alpha.indexOf(initials[1])) * 255 * 255 * 255 / 70);
  //   return '#' + value.toString(16).padEnd(6, '0');
  // }

  // private scroll(): void {
  //   setTimeout(() => {
  //     this.scrollToBottom();
  //   }, 100);
  // }

  // private getDiff(): number {
  //   if (!this.viewer) {
  //     return -1;
  //   }

  //   const nativeElement = this.viewer.nativeElement;
  //   return nativeElement.scrollHeight - (nativeElement.scrollTop + nativeElement.clientHeight);
  // }

  // private scrollToBottom(t = 1, b = 0): void {
  //   if (b < 1) {
  //     b = this.getDiff();
  //   }
  //   if (b > 0 && t <= 120) {
  //     setTimeout(() => {
  //       const diff = this.easeInOutSin(t / 120) * this.getDiff();
  //       this.viewer.nativeElement.scrollTop += diff;
  //       this.scrollToBottom(++t, b);
  //     }, 1 / 60);
  //   }
  // }

  // private easeInOutSin(t): number {
  //   return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
  // }

  // ngOnInit() {
  //   // localStorage.removeItem('user');
  // }

}
