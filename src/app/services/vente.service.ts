import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Vente } from '@app/models/vente';
import { LigneVente } from '@app/models/lignevente';
import { VenteMensuelle } from '@app/models/ventemensuelle';
import { VenteQuotidienne } from '@app/models/ventequotidienne';
import { map, publishLast, refCount } from 'rxjs/operators';
import { VenteDate } from '@app/models/ventedate';
import { Livraison } from '@app/models/livraison';
import { VenteProduitMensuel } from '@app/models/venteproduitsmensuel';
import { ArchiveVenteFilter } from '@app/models/archiveventefilter';

@Injectable({ providedIn: 'root' })
export class VenteService {
    constructor(private http: HttpClient) { }

    venteCreate(entity: Vente) {
        return this.http.post<Vente>(`${environment.apiUrl}/api/vente`, entity);
    }

    venteUpdate(entity: Vente) {
        return this.http.put<Vente>(`${environment.apiUrl}/api/vente/${entity.id}`, entity);
    }

    venteEditDate(entity: VenteDate) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/vente/editdate`, entity);
    }

    venteLivrer(entity: Livraison) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/vente/livraison`, entity)
        .pipe(publishLast(), refCount());;
    }

    ventesRecentes() {
        return this.http.get<Vente[]>(`${environment.apiUrl}/api/vente/recentes`);
    }

    archivesVentes(filter: ArchiveVenteFilter) {
        return this.http.post<Vente[]>(`${environment.apiUrl}/api/vente/archives`, filter);
    }

    venteGetByClient(id: number) {
        return this.http.get<Vente[]>(`${environment.apiUrl}/api/vente/client/${id}`);
    }

    venteGetById(id: number) {
        return this.http.get<Vente>(`${environment.apiUrl}/api/vente/${id}`);
    }

    ligneventeCreate(entity: LigneVente) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/vente/lignevente`, entity);
    }

    ligneventeUpdate(entity: LigneVente) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/vente/lignevente/${entity.id}`, entity);
    }

    ligneventeDelete(id: number) {
        return this.http.delete<boolean>(`${environment.apiUrl}/api/vente/lignevente/${id}`)
          .pipe(publishLast(), refCount());
    }

    ligneventeGetByvente(id: number) {
        return this.http.get<LigneVente[]>(`${environment.apiUrl}/api/vente/lignevente/vente/${id}`);
    }

    ligneventeGetById(id: number) {
        return this.http.get<LigneVente>(`${environment.apiUrl}/api/vente/lignevente/${id}`);
    }

    ventesMensuelles() {
        return this.http.get<VenteMensuelle[]>(`${environment.apiUrl}/api/vente/etatmensuel`);
    }

    ventesComparerMarges() {
        return this.http.get<VenteMensuelle[]>(`${environment.apiUrl}/api/vente/comparermargesmois`);
    }

    ventesQuotidiennes() {
        return this.http.get<VenteQuotidienne[]>(`${environment.apiUrl}/api/vente/ventesquotidiennes`);
    }

    ventesProduitsMensuel() {
        return this.http.get<VenteProduitMensuel[]>(`${environment.apiUrl}/api/vente/ventesproduits`);
    }
}