/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { MalasHierbas } from '../../interfaces/malasHierbas';
import { MALASHIERBAS } from '../../data/data.malasHierbas';

@Component({
  selector: 'app-malas-hierbas',
  templateUrl: './malas-hierbas.page.html',
  styleUrls: ['./malas-hierbas.page.scss'],
})
export class MalasHierbasPage implements OnInit {

  malasHierbas: MalasHierbas[] = [];
  estadoPrincipal = [];
  estadosSecundarios =[];
  cadena ='';

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.malasHierbas = MALASHIERBAS.slice(0);

    this.estadoPrincipal = this.malasHierbas.filter( estado =>{
      return estado.codigo.length == 1;
    });
  }

  verDetalles(e: any) {
    console.log(e.codigo);
    this.estadosSecundarios = this.malasHierbas.filter(estado => {
      return (estado.codigo[0] == e.codigo);
    });

    console.log(this.estadosSecundarios);
    this.cadena = JSON.stringify(this.estadosSecundarios);
    console.log(this.cadena);

    this.router.navigate(['/estadio-secundario', this.cadena]);
    //this.router.navigateByUrl(`/estadio-secundario/${ e.codigo }`);
    //this.router.navigate(['/estadio-secundario', e.descripcion]);
    //this.navCtrl.navigateForward(`/estadio-secundario/${ e.codigo }`);
  }
}
