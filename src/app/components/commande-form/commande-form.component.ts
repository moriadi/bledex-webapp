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

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html'
})
export class CommandeFormComponent {
  @ViewChild("commandeForm") form: DxFormComponent;
  @Input() commande: Commande;
  fournisseurs: Fournisseur[];

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
      private transverseService: TransverseService) {
          this.transverseService.fournisseurGetAll().subscribe(t => this.fournisseurs = t);
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.commande.id > 0){
            this.commandeService.commandeUpdate(this.commande).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_COMMANDE_FORM');
            });
        } else {
            this.commandeService.commandeCreate(this.commande).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_COMMANDE_FORM');
            });
        }
  }
}
