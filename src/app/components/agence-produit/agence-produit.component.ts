import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';
import { SharedDataService } from '@app/services/shared-data.service';
import { AgenceProduit } from '@app/models/agenceproduit';

@Component({
  selector: 'app-agence-produit',
  templateUrl: './agence-produit.component.html'
})
export class AgenceProduitsComponent {
  @Input() agenceproduits: AgenceProduit[];

  constructor() {
  }

  ngOnInit() {
  }
}
  