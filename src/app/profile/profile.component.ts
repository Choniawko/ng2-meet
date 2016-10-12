import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondChildComponent } from './../second-child/second-child.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild(SecondChildComponent) private secChild:SecondChildComponent;
  user:string = 'Paweł';
  constructor() { }

  ngOnInit() {
  }

  changeAvatarByParrent() {
    this.secChild.getAvatar();
  }

}
