import { Quartier } from './quartier';
import { User } from './user';
import { Fournisseur } from './fournisseur';

export class Commande {
    id: number;
    libelle: string;
    montant: number;
    dateCreation: Date;
    dateDerniereModification: Date;
    createurId: number;
    estValide: boolean;
    modificateurId: number;
    fournisseurId: number;
    createur: User;
    fournisseur: Fournisseur;
    modificateur: User;

    public constructor(){
        this.fournisseur = new Fournisseur();
    }
}