import { Agence } from './agence';
import { Depot } from './depot';
import { Fonction } from './fonction';

export class User {
    id: number;
    prenom: string;
    nom: string;
    dateNaissance: Date;
    idFonction: number;
    telephone: string;
    email: string;
    idDepot: number;
    fonction: Fonction;
    depot: Depot;
    token: string;
    agence: Agence;
}