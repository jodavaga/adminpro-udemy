import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }

  cambiarColor( tema: string, link: any ) {

    let elementHTML = this._document.getElementById('tema');
    let url = `assets/css/colors/${ tema }.css`;

    this.aplicarCheck(link);
    elementHTML.href = url;

  }

  aplicarCheck( link: any ) {
    let elementos = document.getElementsByClassName('selector');
    console.log(link);

    for (let elem of elementos) {
      elem.classList.remove("working");
    }

    link.classList.add('working');

  }

}
