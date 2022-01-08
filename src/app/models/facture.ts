import { LigneVente } from './lignevente';

export class Facture {
    id: number;
    numero: string;
    dateDuJour: string;
    dateCreation: string;
    raisonSocialeClient: string;
    nomEntreprise: string;
    emailEntreprise: string;
    telephoneEntreprise: string;
    montantTotal: number;
    venteId: number;
    produits: LigneVente[];
    netPayer: number;
    reduction: number;
}