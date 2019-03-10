import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HelpComponent implements OnInit {

  title = "Help";
  
  constructor(private _titleSrv: Title ) { 
    this._titleSrv.setTitle("Help");
  }

  ngOnInit() { }

}
