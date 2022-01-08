import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Charge } from '@app/models/charge';
import { ChargeMensuelle } from '@app/models/chargemensuelle';
import { TypeCharge } from '@app/models/typecharge';
import { ChargeAgence } from '@app/models/chargeagence';

@Injectable({ providedIn: 'root' })
export class ChargeService {
    constructor(private http: HttpClient) { }

    create(charge: Charge) {
        return this.http.post<boolean>(`${environment.apiUrl}/api/charge`, charge);
    }

    update(charge: Charge) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/charge/${charge.id}`, charge);
    }

    cloturer(charge: ChargeAgence) {
        return this.http.put<boolean>(`${environment.apiUrl}/api/charge/cloturer/0`, charge);
    }

    getById(id: number) {
        return this.http.get<Charge>(`${environment.apiUrl}/api/charge/${id}`);
    }

    getAll() {
        return this.http.get<ChargeMensuelle[]>(`${environment.apiUrl}/api/charge`);
    }

    typeChargeGetById(id: number) {
        return this.http.get<TypeCharge>(`${environment.apiUrl}/api/charge/typecharge/${id}`);
    }

    typeChargeGetAll() {
        return this.http.get<TypeCharge[]>(`${environment.apiUrl}/api/charge/typecharge`);
    }
}