import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  title = "Contact Us";

  constructor(private _titleSrv: Title) { 
    this._titleSrv.setTitle("Contact Us");
  }

  ngOnInit() {
    
  }

}
