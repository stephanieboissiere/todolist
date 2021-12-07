import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../modeles/tache.modele';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  @Input("tache") tache!: Tache;
  
  constructor() {
    
  }

  ngOnInit(): void {
  }
}
