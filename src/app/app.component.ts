import { Component } from '@angular/core';
import {Festival} from './models/festival';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular';
  festivals = Festival[15];
  selectedFestival?: Festival;

  constructor() {
  }

  ngOnInit(){
    this.festivals = [
      new Festival("Jjm 2019"),
      new Festival("Jjm 2020"),
      new Festival("Jjm 2021"),
    ]
  }

  onSelected(event: Festival) {
    this.selectedFestival = event;
  }

}
