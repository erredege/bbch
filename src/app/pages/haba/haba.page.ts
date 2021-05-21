/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Haba } from '../../interfaces/haba';
import { HABA } from '../../data/data.haba';

@Component({
  selector: 'app-haba',
  templateUrl: './haba.page.html',
  styleUrls: ['./haba.page.scss'],
})
export class HabaPage implements OnInit {

  cultivo = [];
  estadoPrincipal = [];
  estadosSecundarios =[];
  cadena = '';

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.cultivo = HABA.slice(0);

    this.estadoPrincipal = this.cultivo.filter( estado =>{
      return estado.codigo.length == 1;
    });
  }

  estadoSeleccionado( c: any ){
    console.log("Código seleccionado:");
    console.log(c.codigo);

    if(this.cultivo[1].codigo3 !=''){

      console.log('tres');
      this.estadosSecundarios = this.cultivo.filter(estado=>{
        return (estado.codigo3[0] == c.codigo);
      });

    }else{
      this.estadosSecundarios = this.cultivo.filter(estado=>{
        return (estado.codigo[0] == c.codigo);
      });
    }
    console.log(this.estadosSecundarios);
    this.cadena = JSON.stringify(this.estadosSecundarios);
    console.log(this.cadena);

    this.router.navigate(['/estadio-secundario', this.cadena]);
    //this.router.navigateByUrl(`/estadios-secundarios/${ c.codigo }`);
    //this.router.navigate(['/estadios-secundarios', {estados2: '2' }]);
    //this.router.navigate(['/estadios-secundarios', c.codigo]);
    //this.navCtrl.navigateForward(`/estadios-secundarios/${ c.codigo }`);
  }

}
