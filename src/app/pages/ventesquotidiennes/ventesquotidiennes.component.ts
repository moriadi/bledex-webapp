import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { VenteService } from '@app/services/vente.service';
import { VenteQuotidienne } from '@app/models/ventequotidienne';

@Component({
  selector: 'app-ventes-quotidiennes',
  templateUrl: 'ventesquotidiennes.component.html'
})

export class VentesQuotidiennesComponent {
  dataSource: VenteQuotidienne[];
  priority: any[];
  
  constructor(
    private venteService: VenteService
    ) {
    this.venteService.ventesQuotidiennes().subscribe(t => this.dataSource = t);
  }
}
