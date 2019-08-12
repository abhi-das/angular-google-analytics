import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoogleAnaEventTrackService } from '../../services/ga-event-tracking.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  title = "Product List";
  
  constructor(private _titleSrv: Title, private _ga: GoogleAnaEventTrackService ) { 
    this._titleSrv.setTitle("Product List");
  }

  ngOnInit() {
    this._ga.gaEmitEventForLoadRecordspublic();
  }

  showCaseLink() {
    this._ga.gaEmitEvent("showcaseCategory", "world_feature_post", "My Featured Post", 10);
  }
  
  homeInteriorLink() {
    this._ga.gaEmitEvent("homeInteriorCategory", "design_home_interior", "Design Home", 5);
  }

}
