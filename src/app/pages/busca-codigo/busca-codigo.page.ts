/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';

import { Cultivo } from '../../interfaces/interfaces';
import { CULTIVO } from '../../data/data.cultivo';


@Component({
  selector: 'app-busca-codigo',
  templateUrl: './busca-codigo.page.html',
  styleUrls: ['./busca-codigo.page.scss'],
})
export class BuscaCodigoPage implements OnInit {

  listaCultivos: Cultivo[] = [];

  constructor() { }

  ngOnInit() {

  }

}
