import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() parrentUser;
  @Output() childUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSend(value) {
    console.log('user in UserCardComponent', value);
    this.childUser.emit({
      value: value
    });
  }



}
