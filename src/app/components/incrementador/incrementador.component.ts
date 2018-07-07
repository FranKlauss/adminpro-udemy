import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  MIN_PROGRESO = 0;
  MAX_PROGRESO = 100;

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number ): void {

    // const elemHtml: any = document.getElementsByName('progreso')[0];

    if ( newValue < this.MIN_PROGRESO ) {
      this.progreso = this.MIN_PROGRESO;
    } else if ( newValue > this.MAX_PROGRESO ) {
      this.progreso = this.MAX_PROGRESO;
    } else {
      this.progreso = newValue;
    }

    // elemHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );
  }

  cambiarValor(valor: number) {
    const res = this.progreso + valor;
    if (res < this.MIN_PROGRESO) {
      this.progreso = this.MIN_PROGRESO;
    } else if (res > this.MAX_PROGRESO) {
      this.progreso = this.MAX_PROGRESO;
    } else {
      this.progreso = res;
    }
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }
}
