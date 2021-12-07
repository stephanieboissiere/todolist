import { Tache } from "./tache.modele";

export class List {
    id: number;
    name: string;

    listeTaches: Array<Tache>;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.listeTaches = new Array<Tache>();
    }

    getListTache(): Array<any> {
        return this.listeTaches;
    }

    addTache(tache: string) {
        this.listeTaches.push(
            {
                id: this.listeTaches.length + 1,
                name: tache,
            }
        );
    };

    deleteTache(id: number) {
        this.listeTaches = this.listeTaches.filter(tache => tache.id !== id)
    }
}