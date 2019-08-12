import { Component, OnInit, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  title = "home";
  accordList = [{
    headerTxt: "Multi Slot Transclusion 1",
    contentTxt: "Labore exercitation culpa in ipsum consectetur ut exercitation est cupidatat.",
    footerTxt: "Aliquip esse tempor exercitation fugiat occaecat occaecat."
  }, {
    headerTxt: "Multi Slot Transclusion 2",
    contentTxt: "Proident elit cillum nostrud labore exercitation laboris commodo tempor ipsum Lorem minim proident.",
    footerTxt: "Do do qui do nisi incididunt enim voluptate incididunt anim amet."
  }, {
    headerTxt: "Multi Slot Transclusion 3",
    contentTxt: "Proident non pariatur officia officia. Fugiat aute elit ullamco cillum deserunt elit nulla commodo.",
    footerTxt: "Esse deserunt et aliqua est laboris esse enim sunt id non est et qui aute."
  }];

  @ViewChild("temp1") tmp1: TemplateRef<any>;
  @ViewChild("temp2") tmp2: TemplateRef<any>;

  cTemp: TemplateRef<any>;
  
  cContent = {
    txt1: "Elit ut esse nulla culpa ut velit officia magna eu magna.",
    txt2: "Sunt proident amet exercitation proident."
  };
  
  constructor(private _titleSrv: Title) { 
    this._titleSrv.setTitle("Home");
  }

  ngOnInit() {}

  changeTemplate(e) {
    // console.log('here', e.target.dataset['idx'])
    e.target.dataset['idx'] == "1" ? this.cTemp = this.tmp1 : this.cTemp = this.tmp2;
  }

}
