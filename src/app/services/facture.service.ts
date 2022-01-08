import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Facture } from '@app/models/facture';

@Injectable({ providedIn: 'root' })
export class FactureService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Facture[]>(`${environment.apiUrl}/api/facture`);
    }

    get(venteId: number) {
        return this.http.get<Facture>(`${environment.apiUrl}/api/facture/${venteId}`);
    }
}