import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Transfert } from '@app/models/transfert';
import { LigneTransfert } from '@app/models/lignetransfert';

@Injectable({ providedIn: 'root' })
export class TransfertService {
    constructor(private http: HttpClient) { }

    create(entity: Transfert) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/transfert`, entity)
    }

    update(entity: Transfert) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/transfert/${entity.id}`, entity)
    }

    valider(entity: Transfert) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/transfert/valider`, entity)
    }

    getAll() {
        return this.http.get<Transfert[]>(`${environment.apiUrl}/api/transfert`);
    }

    getById(id: number) {
        return this.http.get<Transfert>(`${environment.apiUrl}/api/transfert/${id}`);
    }

    ligneTransfertCreate(entity: LigneTransfert) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/transfert/lignetransfert`, entity)
    }

    ligneTransfertDelete(id: number) {
        return this.http.delete<boolean>(`${environment.apiUrl}/api/transfert/lignetransfert/${id}`)
    }
}