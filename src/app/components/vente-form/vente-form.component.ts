import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { Fournisseur } from '@app/models/fournisseur';
import { Produit } from '@app/models/produit';
import { Vente } from '@app/models/vente';
import { VenteService } from '@app/services/vente.service';
import { ClientService } from '@app/services/client.service';
import { Client } from '@app/models/client';

@Component({
  selector: 'app-vente-form',
  templateUrl: './vente-form.component.html'
})
export class VenteFormComponent {
  @ViewChild("venteForm") form: DxFormComponent;
  @Input() vente: Vente;
  clients: Client[];
  fournisseurs: Fournisseur[];
  produits: Produit[];

  buttonOptions: any = { 
    text: "Sélectionner",
    type: "success",
    onClick: () => {
        if(this.form.instance.validate().isValid) {
            this.onValidationClick(null);
        }
    }
  };

  constructor(private sharedDataService: SharedDataService,
      private venteService: VenteService,
      private clientService: ClientService) {
          this.clientService.getAll().subscribe(t => this.clients = t);
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        this.vente.clientId = this.vente.client.id;
        if (this.vente.id > 0){
            this.venteService.venteUpdate(this.vente).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_VENTE_FORM');
            });
        } else {
            this.venteService.venteCreate(this.vente).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_VENTE_FORM');
            });
        }
  }
}
