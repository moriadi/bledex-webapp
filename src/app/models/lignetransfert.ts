import { Commande } from './commande';
import { Produit } from './produit';
import { Transfert } from './transfert';

export class LigneTransfert {
    id: number;
    produit: Produit;
    transfert: Transfert;
    quantite: number;
    
    public constructor(){
        this.produit = new Produit();
    }
}