import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Produit } from '@app/models/produit';
import { Commande } from '@app/models/commande';
import { LigneCommande } from '@app/models/lignecommande';

@Injectable({ providedIn: 'root' })
export class CommandeService {
    constructor(private http: HttpClient) { }

    commandeCreate(entity: Commande) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/commande`, entity)
    }

    commandeUpdate(entity: Commande) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/commande/${entity.id}`, entity)
    }

    commandeReceptionner(entity: Commande) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/commande/receptionner`, entity)
    }

    commandeGetAll() {
        return this.http.get<Commande[]>(`${environment.apiUrl}/api/commande`);
    }

    commandeGetByFournisseur(id: number) {
        return this.http.get<Commande[]>(`${environment.apiUrl}/api/commande/fournisseur/${id}`);
    }

    commandeGetById(id: number) {
        return this.http.get<Commande>(`${environment.apiUrl}/api/commande/${id}`);
    }

    ligneCommandeCreate(entity: LigneCommande) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/commande/lignecommande`, entity)
    }

    ligneCommandeUpdate(entity: LigneCommande) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/commande/lignecommande/${entity.id}`, entity)
    }

    ligneCommandeDelete(id: number) {
        return this.http.delete<boolean>(`${environment.apiUrl}/api/commande/lignecommande/${id}`)
    }

    ligneCommandeGetByCommande(id: number) {
        return this.http.get<LigneCommande[]>(`${environment.apiUrl}/api/commande/lignecommande/commande/${id}`);
    }

    ligneCommandeGetById(id: number) {
        return this.http.get<LigneCommande>(`${environment.apiUrl}/api/commande/lignecommande/${id}`);
    }
}