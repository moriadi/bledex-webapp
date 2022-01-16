import { User } from './user';
import { Client } from './client';

export class Vente {
    id: number;
    numero: string;
    montant: number;
    dateCreation: Date;
    dateDerniereModification: Date;
    createurId: number;
    estLivre: boolean;
    modificateurId: number;
    fournisseurId: number;
    createur: User;
    client: Client;
    modificateur: User;
    clientId: number;
    estModifiable: boolean;
    total: number;
    reduction: number;

    public constructor(){
        this.client = new Client();
    }
}