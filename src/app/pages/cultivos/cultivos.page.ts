/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';

import { Cultivo } from '../../interfaces/interfaces'
import { CULTIVO } from '../../data/data.cultivo';

@Component({
  selector: 'app-cultivos',
  templateUrl: './cultivos.page.html',
  styleUrls: ['./cultivos.page.scss'],
})
export class CultivosPage implements OnInit {

  listaCultivos: Cultivo[] = [];

  constructor() { }

  ngOnInit() {
    this.listaCultivos = CULTIVO.slice(0);
    this.listaCultivos.sort((a,b)=>{
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre){
        return -1;
      }
      return 0;
    });
  }

}
