import { Commande } from './commande';
import { Produit } from './produit';
import { Vente } from './vente';

export class LigneVente {
    id: number;
    venteId: number;
    produitId: number;
    quantite: number;
    montant: number;
    vente: Vente;
    produit: Produit;
    cump: number;
    prixUnitaire: number;

    public constructor(){
        this.vente = new Vente();
        this.produit = new Produit();
    }
}