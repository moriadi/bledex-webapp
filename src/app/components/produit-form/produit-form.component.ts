import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Fournisseur } from '@app/models/fournisseur';
import { Produit } from '@app/models/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '@app/services/produit.service';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html'
})
export class ProduitFormComponent {
  @ViewChild("produitForm") form: DxFormComponent;
  @Input() produit: Produit;
  fournisseurs: Fournisseur[];

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
      private route: ActivatedRoute,
      private router: Router,
      private produitService: ProduitService,
      private transverseService: TransverseService) {
          this.transverseService.fournisseurGetAll().subscribe(t => this.fournisseurs = t);
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.produit.id > 0){
            this.produitService.update(this.produit).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_PRODUIT_FORM');
            });
        } else {
            this.produitService.create(this.produit).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_PRODUIT_FORM');
              },(err) => { this.errorMessage = err.error; this.errorVisible = true;}
            );
        }
  }
}
