/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Arroz} from '../../interfaces/arroz';
import { ARROZ} from '../../data/data.arroz';

@Component({
  selector: 'app-arroz',
  templateUrl: './arroz.page.html',
  styleUrls: ['./arroz.page.scss'],
})
export class ArrozPage implements OnInit {

  cultivo = [];
  estadoPrincipal = [];
  estadosSecundarios =[];
  cadena ='';

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.cultivo = ARROZ.slice(0);

    this.estadoPrincipal = this.cultivo.filter( estado =>{

      return estado.codigo.length == 1;

    });
  }

  verDetalles(e: any) {
    console.log(e.codigo);
    if(this.cultivo[1].codigo3 !=''){
      this.estadosSecundarios = this.cultivo.filter(estado => {
        return (estado.codigo3[0] == e.codigo);
      });
    }else{
      this.estadosSecundarios = this.cultivo.filter(estado=>{
        return (estado.codigo[0] == e.codigo);
      });
    }

    console.log(this.estadosSecundarios);
    this.cadena = JSON.stringify(this.estadosSecundarios);
    console.log(this.cadena);

    this.router.navigate(['/estadio-secundario', this.cadena]);
    //this.router.navigateByUrl(`/estadio-secundario/${ e.codigo }`);
    //this.router.navigate(['/estadio-secundario', e.descripcion]);
    //this.navCtrl.navigateForward(`/estadio-secundario/${ e.codigo }`);
  }
}
