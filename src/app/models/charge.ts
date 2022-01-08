import { TypeCharge } from './typecharge';

export class Charge {
    id: number;
    date: Date;
    montant: number;
    idTypeCharge: number;
    typeCharge: TypeCharge;
    remarques: string;

    constructor(){
        this.typeCharge = new TypeCharge();
    }
}