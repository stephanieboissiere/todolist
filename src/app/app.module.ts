import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TacheService } from './services/tache.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheComponent } from './tache/tache.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListesComponent } from './listes/listes.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListesComponent,
    ListeComponent,
    TacheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    TacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
