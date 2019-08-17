import { Component, OnInit } from '@angular/core';
import { SpringService } from '../../services/spring.service';

@Component({
  selector: 'app-springcar',
  templateUrl: './springcar.component.html',
  styleUrls: ['./springcar.component.scss']
})
export class SpringcarComponent implements OnInit {

  carlist: Array<any>;
  constructor(private _spSrv: SpringService) { }

  ngOnInit() {

    this._spSrv.getCarList().subscribe(res => {
      this.carlist = res;
      console.log(this.carlist);
    })
  }

}
