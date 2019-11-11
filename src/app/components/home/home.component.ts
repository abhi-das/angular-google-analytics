import { Component, OnInit, ViewEncapsulation, TemplateRef, ViewChild, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StoreChange } from '../../services/store-change.service';

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

  constructor(private _titleSrv: Title,
    private _storeChange: StoreChange,
    private _render: Renderer2) {
    this._titleSrv.setTitle("Home");
  }

  ngOnInit() {

    if (this._storeChange.getStorage().length) {
      const count = (this._storeChange.getStorage()[0]["value"]) + 1;
      this._storeChange.store("appwindow", count);
    } else {
      this._storeChange.store("appwindow", 1);
    }
    console.log(this._storeChange.getStorage())
    this._storeChange.changes.subscribe(res => {

      console.log(res);
      if (res["value"] <= 0) {

        this._storeChange.stop();

      }

    });

    this._render.listen('window', 'beforeunload', event => {
      console.log('helllochange');
      // Cancel the event
      event.preventDefault();
      // Chrome requires returnValue to be set
      //event.returnValue = '';
      const count = (this._storeChange.getStorage()[0]["value"]) - 1;
      this._storeChange.store("appwindow", count);
    })

  }


  changeTemplate(e) {
    // console.log('here', e.target.dataset['idx'])
    e.target.dataset['idx'] == "1" ? this.cTemp = this.tmp1 : this.cTemp = this.tmp2;
  }

  // @HostListener('window:unload', ['$event'])
  // beforeunloadHandler(event) {
  //   const count = (this._storeChange.getStorage()[0]["value"]) - 1;
  //   this._storeChange.store("appwindow", count);
  // }

}
