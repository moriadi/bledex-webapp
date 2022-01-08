import { VenteMensuelleDetails } from './ventemensuelle-details';

export class VenteMensuelle {
    mois: string;
    chiffreAffaire: number;
    prixAchat: number;
    marge: number;
    moisCourant: boolean;
    details: VenteMensuelleDetails[];
}