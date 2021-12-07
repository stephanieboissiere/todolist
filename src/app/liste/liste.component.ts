import { Component, Input, OnInit } from '@angular/core';
import { List } from '../modeles/newList.modele';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input('list') list!: List;

  constructor() {
  }

  ngOnInit(): void {
  }

  addTache(tache: string) {
    this.list.addTache(tache);
  };

  deleteTache(id: number) {
    this.list.deleteTache(id);
  };
}
