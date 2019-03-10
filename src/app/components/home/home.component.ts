import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  title = "home";
  
  constructor(private _titleSrv: Title) { 
    this._titleSrv.setTitle("Home");
  }

  ngOnInit() {}

}
