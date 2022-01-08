import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Vente } from '@app/models/vente';
import { VenteService } from '@app/services/vente.service';
import { LigneVente } from '@app/models/lignevente';
import { SharedDataService } from '@app/services/shared-data.service';
import { VenteMensuelle } from '@app/models/ventemensuelle';
import { VenteMensuelleDetails } from '@app/models/ventemensuelle-details';

@Component({
  selector: 'app-ventemensuelle-details',
  templateUrl: './ventemensuelle-details.component.html'
})
export class VenteMensuelleDetailsComponent {
  @Input() venteMensuelle: VenteMensuelle;
  details: VenteMensuelleDetails[];

  constructor(private sharedDataService: SharedDataService,
    private venteService: VenteService) {
       }

  ngOnInit() {
    this.details = this.venteMensuelle.details;
  }
}
