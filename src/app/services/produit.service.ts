import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Produit } from '@app/models/produit';

@Injectable({ providedIn: 'root' })
export class ProduitService {
    constructor(private http: HttpClient) { }

    create(produit: Produit) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/produit`, produit)
    }

    update(produit: Produit) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/produit/${produit.id}`, produit)
    }

    getAll() {
        return this.http.get<Produit[]>(`${environment.apiUrl}/api/produit`);
    }

    acommander() {
        return this.http.get<Produit[]>(`${environment.apiUrl}/api/produit/acommander`);
    }

    getByFournisseur(id) {
        return this.http.get<Produit[]>(`${environment.apiUrl}/api/produit/fournisseur/${id}`);
    }

    getById(id: number) {
        return this.http.get<Produit>(`${environment.apiUrl}/api/produit/${id}`);
    }
}