import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cultivos',
    loadChildren: () => import('./pages/cultivos/cultivos.module').then( m => m.CultivosPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'busca-codigo',
    loadChildren: () => import('./pages/busca-codigo/busca-codigo.module').then( m => m.BuscaCodigoPageModule)
  },
  {
    path: 'estadio-secundario/:ep',
    loadChildren: () => import('./pages/estadio-secundario/estadio-secundario.module').then( m => m.EstadioSecundarioPageModule)
  },
  {
    path: 'algodon',
    loadChildren: () => import('./pages/algodon/algodon.module').then( m => m.AlgodonPageModule)
  },
  {
    path: 'arroz',
    loadChildren: () => import('./pages/arroz/arroz.module').then( m => m.ArrozPageModule)
  },
  {
    path: 'cacahuete',
    loadChildren: () => import('./pages/cacahuete/cacahuete.module').then( m => m.CacahuetePageModule)
  },
  {
    path: 'cereales',
    loadChildren: () => import('./pages/cereales/cereales.module').then( m => m.CerealesPageModule)
  },
  {
    path: 'citricos',
    loadChildren: () => import('./pages/citricos/citricos.module').then( m => m.CitricosPageModule)
  },
  {
    path: 'colza',
    loadChildren: () => import('./pages/colza/colza.module').then( m => m.ColzaPageModule)
  },
  {
    path: 'cucurbitaceas',
    loadChildren: () => import('./pages/cucurbitaceas/cucurbitaceas.module').then( m => m.CucurbitaceasPageModule)
  },
  {
    path: 'cultivos',
    loadChildren: () => import('./pages/cultivos/cultivos.module').then( m => m.CultivosPageModule)
  },
  {
    path: 'fresa',
    loadChildren: () => import('./pages/fresa/fresa.module').then( m => m.FresaPageModule)
  },
  {
    path: 'frutalesPepita',
    loadChildren: () => import('./pages/frutales/frutales.module').then( m => m.FrutalesPageModule)
  },
  {
    path: 'frutalesHueso',
    loadChildren: () => import('./pages/frutalesHueso/frutalesHueso.module').then( m => m.FrutalesHuesoPageModule)
  },
  {
    path: 'girasol',
    loadChildren: () => import('./pages/girasol/girasol.module').then( m => m.GirasolPageModule)
  },
  {
    path: 'grosellero',
    loadChildren: () => import('./pages/grosellero/grosellero.module').then( m => m.GroselleroPageModule)
  },
  {
    path: 'guisantes',
    loadChildren: () => import('./pages/guisantes/guisantes.module').then( m => m.GuisantesPageModule)
  },
  {
    path: 'haba',
    loadChildren: () => import('./pages/haba/haba.module').then( m => m.HabaPageModule)
  },
  {
    path: 'hortalizasRaízTub',
    loadChildren: () => import('./pages/hortalizas1/hortalizas1.module').then( m => m.Hortalizas1PageModule)
  },
  {
    path: 'otrasHortalizas',
    loadChildren: () => import('./pages/hortalizas2/hortalizas2.module').then( m => m.Hortalizas2PageModule)
  },
  {
    path: 'hortalizasPlantaBulbosa',
    loadChildren: () => import('./pages/hortalizas3/hortalizas3.module').then( m => m.Hortalizas3PageModule)
  },
  {
    path: 'judias',
    loadChildren: () => import('./pages/judias/judias.module').then( m => m.JudiasPageModule)
  },
  {
    path: 'lupulo',
    loadChildren: () => import('./pages/lupulo/lupulo.module').then( m => m.LupuloPageModule)
  },
  {
    path: 'maiz',
    loadChildren: () => import('./pages/maiz/maiz.module').then( m => m.MaizPageModule)
  },
  {
    path: 'musacea',
    loadChildren: () => import('./pages/musacea/musacea.module').then( m => m.MusaceaPageModule)
  },
  {
    path: 'patata',
    loadChildren: () => import('./pages/patata/patata.module').then( m => m.PatataPageModule)
  },
  {
    path: 'remolacha',
    loadChildren: () => import('./pages/remolacha/remolacha.module').then( m => m.RemolachaPageModule)
  },
  {
    path: 'soja',
    loadChildren: () => import('./pages/soja/soja.module').then( m => m.SojaPageModule)
  },
  {
    path: 'solanaceas',
    loadChildren: () => import('./pages/solanaceas/solanaceas.module').then( m => m.SolanaceasPageModule)
  },
  {
    path: 'verdurasCabeza',
    loadChildren: () => import('./pages/verduras1/verduras1.module').then( m => m.Verduras1PageModule)
  },
  {
    path: 'verdurasNoCabeza',
    loadChildren: () => import('./pages/verduras2/verduras2.module').then( m => m.Verduras2PageModule)
  },
  {
    path: 'vid',
    loadChildren: () => import('./pages/vid/vid.module').then( m => m.VidPageModule)
  },
  {
    path: 'malasHierbas',
    loadChildren: () => import('./pages/malas-hierbas/malas-hierbas.module').then( m => m.MalasHierbasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
