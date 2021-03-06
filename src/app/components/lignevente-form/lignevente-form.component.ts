import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { Produit } from '@app/models/produit';
import { ProduitService } from '@app/services/produit.service';
import { Vente } from '@app/models/vente';
import { VenteService } from '@app/services/vente.service';
import { LigneVente } from '@app/models/lignevente';
import { ClientService } from '@app/services/client.service';
import { Client } from '@app/models/client';


@Component({
  selector: 'app-lignevente-form',
  templateUrl: './lignevente-form.component.html'
})
export class LigneVenteFormComponent {
  @ViewChild("ligneventeForm") form: DxFormComponent;
  @Input() ligneVente: LigneVente;
  @Input() vente: Vente;
  produits: Produit[];

  errorVisible = false;
  errorMessage = 'my message';
  type = 'error';
  
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
      private venteService: VenteService,
      private produitService: ProduitService) {
      }

  ngOnInit() {
    this.sharedDataService.currentMessage.subscribe(t => {
        if (t == 'LIGNE_VENTE_REFRESH_PRODUITS') {
            this.produitService.getAll().subscribe(t => this.produits = t);
        }
     });
  }

  onValidationClick(args) {
        this.ajouterLigneProduit_V1();
  }

  ajouterLigneProduit_V1() {
    console.log(this.ligneVente);
    if(this.ligneVente.changePrixUnitaire && this.ligneVente.prixUnitaire == 0){  
      this.errorMessage = "veuillez renseigner le nouveau prix du produit";
      this.errorVisible = true;
      return;
    } else {
        if (this.ligneVente.quantite == 0) {
          this.errorMessage = "veuillez renseigner la quantité";
          this.errorVisible = true;
          return;
        } else
        {
            this.venteService.ligneventeCreate(this.ligneVente).subscribe(t => {
                this.ligneVente.quantite = 0;
                this.sharedDataService.changeMessage('CLOSED_LIGNEVENTE_FORM');
            }, (err) => { this.errorMessage = err.error;  this.errorVisible = true; }); 
        }
        
    }  
  }

  fournisseurValueChanged(e) {
      this.produitService.getByFournisseur(this.ligneVente.produit.fournisseurId).subscribe(t => this.produits = t);
  }
}
