import { Commande } from './commande';
import { Produit } from './produit';

export class LigneCommande {
    id: number;
    commandeId: number;
    produitId: number;
    quantite: number;
    prixUnitaire: number;
    montant: number;
    autresInformations: string;
    commande: Commande;
    produit: Produit;

    public constructor(){
        this.commande = new Commande();
        this.produit = new Produit();
    }
}