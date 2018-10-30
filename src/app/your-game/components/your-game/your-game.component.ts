import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-game',
  templateUrl: './your-game.component.html',
  styleUrls: ['./your-game.component.css']
})
export class YourGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public get someTest(): string {
      return `Some Text`;
  }

}
