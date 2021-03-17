import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Festival} from '../../../models/festival';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit {

  @Input('festivals')
  festivals: Festival[] = [];
  @Output() festivalSelected = new EventEmitter<Festival>()

  constructor(private loggger : MessageService) {

  }

  ngOnInit(): void {
    this.loggger.log(`On est dans la liste ${this.festivals.length} festivals `)
    if(this.festivals.length >0){
      this.loggger.log(`Le premier festival ${JSON.stringify(this.festivals[0])}`)
    }
  }

  onSelect(festival){
    this.festivalSelected.emit(festival);
  }

}
