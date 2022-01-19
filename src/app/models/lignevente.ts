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
    changePrixUnitaire: boolean;

    public constructor(){
        this.vente = new Vente();
        this.produit = new Produit();
        this.prixUnitaire = 0;
        this.quantite = 0;
    }
}