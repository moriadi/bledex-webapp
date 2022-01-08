import { AgenceProduit } from './agenceproduit';
import { Fournisseur } from './fournisseur';

export class Produit {
    id: number;
    code: string;
    libelle: string;
    fournisseurId: number;
    cump: number;
    fournisseur: Fournisseur;
    cotealerte: number = 1000000;
    prixVente: number;
    stockTotal: number;
    agenceProduits: AgenceProduit[];
    
    constructor(){
        this.fournisseur = new Fournisseur();
    }
}