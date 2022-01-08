import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';
import { Router } from '@angular/router';
import { VenteMensuelle } from '@app/models/ventemensuelle';
import { VenteService } from '@app/services/vente.service';

@Component({
  selector: 'app-ventes-mensuelles',
  templateUrl: 'ventesmensuelles.component.html'
})

export class VentesMensuellesComponent {
  dataSource: VenteMensuelle[];
  priority: any[];
  defaultVisible: boolean = false;
  dernieresVentes: VenteMensuelle[] = [];
  
  constructor(
    private venteService: VenteService
    ) {
    this.venteService.ventesMensuelles().subscribe(t => this.dataSource = t);
  }

  public toggleDefault() {
     this.defaultVisible = true;
     if(this.dernieresVentes.length == 0) {
       this.venteService.ventesComparerMarges().subscribe(t => this.dernieresVentes = t);
     }
  }
}
