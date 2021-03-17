import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : { message : string, style : string}[] = [];

  constructor() {
    this.messages.push({message : "Salut", style:'test'})
  }

  log(message : string){
    this.messages.push({message : message, style: ""})
  }

  clear(){
    this.messages = [];
  }
}
