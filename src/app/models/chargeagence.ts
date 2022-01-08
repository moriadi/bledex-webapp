import { Charge } from './charge';

export class ChargeAgence {
    agence: string;
    montant: number;
    estCloture: boolean;
    mois: string;
    details: Charge[];
}