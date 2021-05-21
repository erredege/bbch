import { Component, OnInit } from '@angular/core';

interface OpMenu{
  icon:string;
  name:string;
  redirectTo:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  opcionesMenu:OpMenu[] = [
    {
      icon:"flower-outline",
      name:'Cultivos',
      redirectTo:'/cultivos'
    },
    {
      icon:"leaf-outline",
      name:'Girasol',
      redirectTo:'/girasol'
    },
    {
      icon:"leaf-outline",
      name:'Patata',
      redirectTo:'/patata'
    },
    {
      icon:"search-outline",
      name:'Busca código',
      redirectTo:'/busca-codigo'
    },
    {
      icon:"information-circle-outline",
      name:'Acerca de',
      redirectTo:'/acercade'
    }



  ];

  constructor() { }

  ngOnInit() {
  }

}
