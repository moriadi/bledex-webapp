import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Tresorerie } from '@app/models/tresorerie';

@Injectable({ providedIn: 'root' })
export class TresorerieService {
    constructor(private http: HttpClient) { }

    create(tresorerie: Tresorerie) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/tresorerie`, tresorerie);
    }

    update(tresorerie: Tresorerie) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/tresorerie/${tresorerie.id}`, tresorerie);
    }

    getById(id: number) {
        return this.http.get<Tresorerie>(`${environment.apiUrl}/api/tresorerie/${id}`);
    }

    getAll() {
        return this.http.get<Tresorerie[]>(`${environment.apiUrl}/api/tresorerie`);
    }
}