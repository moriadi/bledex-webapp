import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';
import { SharedDataService } from '@app/services/shared-data.service';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-etats-ventes',
  templateUrl: './etats-ventes.component.html'
})
export class EtatsVentesComponent {

  typesEtats: any[] = [
   {
      code: 'VENTES_QUOTIDIENNES',
      libelle: 'Ventes Quotidiennes'
   },
   {
       code: 'VENTES_MENSUELLES',
       libelle: 'Ventes Mensuelles'
    },
    {
       code: 'VENTES_PRODUITS', 
       libelle: 'Ventes Par Produits'
    }
  ]

  constructor(private authenticationService: AuthenticationService) {
       }

  ngOnInit() {
    let isVendeur = this.authenticationService.getUserFunction() == "vendeur";
    if (isVendeur) {
       this.typesEtats = [
         {
            code: 'VENTES_QUOTIDIENNES',
            libelle: 'Ventes Quotidiennes'
         },
         {
             code: 'VENTES_MENSUELLES',
             libelle: 'Ventes Mensuelles'
          }
        ]
    }
  }
}
