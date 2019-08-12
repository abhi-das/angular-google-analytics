import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.scss']
})
export class AccordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnCTA(e): void {
    console.log("Tell me here!", e.target);
  }

}
