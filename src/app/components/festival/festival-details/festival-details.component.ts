import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Festival } from 'src/app/models/festival';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-festival-details',
  templateUrl: './festival-details.component.html',
  styleUrls: ['./festival-details.component.css']
})
export class FestivalDetailsComponent implements OnInit {

  constructor(
    private messageService : MessageService,
    private fb: FormBuilder
  ) { }

  @Input() festival: Festival;
  nameControl: FormControl;
  festivalGroup : FormGroup;


  ngOnInit(): void {
    // this.nameControl = new FormControl(this.festival.name);
    // this.nameControl.valueChanges.subscribe(
    //    (name) => { this.festival.name = name; }
    // );
    this.festivalGroup = this.fb.group({
      name: [this.festival.name, [Validators.required, Validators.minLength(4)]],
      entrancePrice: [this.festival.tableprice_1, [Validators.required, Validators.min(100)]],
      mainRoomPrice: [this.festival.tableprice_2, [Validators.required, Validators.min(80)]]
    });

  }

  onValidate(){
    // this.festival.name = this.nameControl.value;
    this.festival.name = this.festivalGroup.get('name').value;
    this.festival.tableprice_1 = this.festivalGroup.get('entrancePrice').value;
    this.festival.tableprice_2 = this.festivalGroup.get('mainRoomPrice').value;
    this.messageService.log(`Festival -> ${JSON.stringify(this.festivalGroup.value)}`);
  }

}
