import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  readonly MAX_PROGRESO = 100;
  readonly MIN_PROGRESO = 0;

  progreso1: number = 50;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
