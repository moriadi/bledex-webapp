import { VenteQuotidienneDetails } from './ventequotidienne-detail';

export class VenteQuotidienne {
    jour: Date;
    chiffreAffaire: number;
    marge: number;
    details: VenteQuotidienneDetails[];
}