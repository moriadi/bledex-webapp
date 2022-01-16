import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Depot } from '@app/models/depot';
import { Fonction } from '@app/models/fonction';
import { Fournisseur } from '@app/models/fournisseur';
import { Agence } from '@app/models/agence';

@Injectable({ providedIn: 'root' })
export class TransverseService {
    constructor(private http: HttpClient) { }

    depotDreate(depot: Depot) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/transverse/depot`, depot)
    }

    depotUpdate(depot: Depot) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/transverse/depot/${depot.id}`, depot)
    }

    fonctionGetAll() {
        return this.http.get<Fonction[]>(`${environment.apiUrl}/api/transverse/fonction`);
    }

    fonctionGetById(id: number) {
        return this.http.get<Fonction>(`${environment.apiUrl}/api/transverse/fonction/${id}`);
    }

    depotGetAll() {
        return this.http.get<Depot[]>(`${environment.apiUrl}/api/transverse/depot`);
    }

    depotGetById(id: number) {
        return this.http.get<Depot>(`${environment.apiUrl}/api/transverse/depot/${id}`);
    }

    fournisseurGetById(id: number) {
        return this.http.get<Fournisseur>(`${environment.apiUrl}/api/transverse/fournisseur/${id}`);
    }

    fournisseurGetAll() {
        return this.http.get<Fournisseur[]>(`${environment.apiUrl}/api/transverse/fournisseur`);
    }

    agenceGetById(id: number) {
        return this.http.get<Agence>(`${environment.apiUrl}/api/transverse/agence/${id}`);
    }

    agenceGetAll() {
        return this.http.get<Agence[]>(`${environment.apiUrl}/api/transverse/agence`);
    }

    fournisseurCreate(fournisseur: Fournisseur) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/transverse/fournisseur`, fournisseur);
    }

    fournisseurUpdate(fournisseur: Fournisseur) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/transverse/fournisseur/${fournisseur.id}`, fournisseur);
    }
}