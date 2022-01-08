import { User } from './user';
import { Fournisseur } from './fournisseur';
import { Agence } from './agence';
import { LigneTransfert } from './lignetransfert';

export class Transfert {
    id: number;
    date: Date;
    estValide: boolean;
    agenceSource: Agence;
    agenceCible: Agence;
    gestionnaire: User;
    produits: LigneTransfert[];
    public constructor(){
        this.agenceCible = new Agence();
        this.agenceSource = new Agence();
        this.gestionnaire = new User();
    }
}