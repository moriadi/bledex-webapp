import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Fournisseur } from '@app/models/fournisseur';
import { Produit } from '@app/models/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '@app/services/produit.service';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';

@Component({
  selector: 'app-lignecommande-form',
  templateUrl: './lignecommande-form.component.html'
})
export class LigneCommandeFormComponent {
  @ViewChild("lignecommandeForm") form: DxFormComponent;
  @Input() ligneCommande: LigneCommande;
  produits: Produit[];

  buttonOptions: any = {
    text: "Register",
    type: "success",
    onClick: () => {
        if(this.form.instance.validate().isValid) {
            this.onValidationClick(null);
        }
    }
  };

  constructor(private sharedDataService: SharedDataService,
     private route: ActivatedRoute,
      private router: Router,
      private commandeService: CommandeService,
      private produitService: ProduitService) {
      }

  ngOnInit() {
    this.sharedDataService.currentMessage.subscribe(t => {
        if (t == 'LIGNE_COMMANDE_REFRESH_PRODUITS') {
            console.log(this.ligneCommande);
            this.produitService.getByFournisseur(this.ligneCommande.commande.fournisseur.id).subscribe(t => this.produits = t);
        }
     });
  }

  onValidationClick(args) {
        if (this.ligneCommande.id > 0){
            this.commandeService.ligneCommandeUpdate(this.ligneCommande).subscribe(t => {
                this.ligneCommande = new LigneCommande();
                this.sharedDataService.changeMessage('CLOSED_LIGNECOMMANDE_FORM');
            });
        } else {
            this.commandeService.ligneCommandeCreate(this.ligneCommande).subscribe(t => {
                this.ligneCommande = new LigneCommande();
                this.sharedDataService.changeMessage('CLOSED_LIGNECOMMANDE_FORM');
            });
        }
  }
}
