import { Tache } from "../modeles/tache.modele";
import { List } from "../modeles/newList.modele";

export class TacheService {

  private lists: Array<List>;


  constructor() {
    this.lists = new Array<List>();
    this.lists.push(new List(1, "liste de Steph"));
  }

  getAllList(): Array<any> {
    return this.lists;
  }

  addList(nom: string) {
    this.lists.push(new List(this.lists.length + 1, nom));
    console.warn(this.lists);
    return this.lists;
  };
}