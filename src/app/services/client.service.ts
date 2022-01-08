import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Client } from '@app/models/client';

@Injectable({ providedIn: 'root' })
export class ClientService {
    constructor(private http: HttpClient) { }

    create(client: Client) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/client`, client);
    }

    update(client: Client) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/client/${client.id}`, client);
    }

    getById(id: number) {
        return this.http.get<Client>(`${environment.apiUrl}/api/client/${id}`);
    }

    getAll() {
        return this.http.get<Client[]>(`${environment.apiUrl}/api/client`);
    }

    aRelancer() {
        return this.http.get<Client[]>(`${environment.apiUrl}/api/client/arelancer`);
    }
}