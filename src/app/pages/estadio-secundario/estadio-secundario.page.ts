/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estadio-secundario',
  templateUrl: './estadio-secundario.page.html',
  styleUrls: ['./estadio-secundario.page.scss'],
})
export class EstadioSecundarioPage implements OnInit {

  ep: string = '';
  estadoS = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.ep = this.route.snapshot.paramMap.get('ep');

    this.estadoS = JSON.parse(this.route.snapshot.paramMap.get('ep'));
    this.ep = this.estadoS[0].descripcion;
  }

}
