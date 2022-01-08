import { User } from './user';
import { Quartier } from './quartier';

export class Client {
    id: number;
    raisonSociale: string;
    nomContact: string;
    telephone: string;
    email: string;
    adresse: string;
    dateCreation: Date;
    
    constructor(){
    }
}