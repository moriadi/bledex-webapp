import { Agence } from "./agence";
import { Produit } from "./produit";

export class AgenceProduit {
    id: number;
    agence: Agence;
    produit: Produit;
    quantite: number;
}