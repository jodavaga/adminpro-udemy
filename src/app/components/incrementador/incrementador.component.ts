import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;


  @Input() leyenda: string = 'Nombre leyenda';
  @Input() progreso: number = 50;

  @Output() actualizoValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Progreso: ', this.progreso);
   }

  ngOnInit() {
    // console.log(this.txtProgress);
  }

  onChanges( newValue: number ) {

    console.log(this.txtProgress);

    if (newValue >= 100) {
      this.progreso = 100;
    }else if (newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;

    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.actualizoValor.emit( this.progreso );
  }

  cambiarValor( val: number ) {

    if (this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += val;

    this.actualizoValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }

}