import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListesComponent } from './listes/listes.component';
import { TacheComponent } from './tache/tache.component';

const routes: Routes = [
  {
    path:'tache',//route de l'url
    component: TacheComponent // le composant appelé pour cette route
  },
  {
    path:'liste',//route de l'url
    component: ListesComponent // le composant appelé pour cette route
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
