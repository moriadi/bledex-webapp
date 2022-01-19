
export class Livraison {
    venteId: number;
    modificateurId: number;
    reduction: number;
    montant: number;
    constructor(vente_id: number){
        this.venteId = vente_id;
        this.modificateurId = 0;
        this.reduction = 0;
        this.montant = 0;
    }
}