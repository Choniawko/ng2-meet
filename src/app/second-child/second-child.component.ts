import { Component, OnInit } from '@angular/core';
import { SecondChildService } from './second-child.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  avatar:string;
  constructor(private _secondChildService:SecondChildService) { }

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar() {
    this._secondChildService.getAvatar()
      .subscribe(
        (data) => {
          this.avatar = data;
        }
      )
  }

}
