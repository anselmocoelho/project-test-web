import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/pages/home/home.component';
import { CarroComponent} from '../app/pages/carro/carro.component';
import { ManobraComponent} from '../app/pages/manobra/manobra.component';
import { ManobristaComponent} from '../app/pages/manobrista/manobrista.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carro', component: CarroComponent },
  { path: 'manobra', component: ManobraComponent },
  { path: 'manobrista', component: ManobristaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
