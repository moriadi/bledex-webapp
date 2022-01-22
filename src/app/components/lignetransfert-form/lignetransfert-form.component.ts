import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { Produit } from '@app/models/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '@app/services/produit.service';
import { TransfertService } from '@app/services/transfert.service';
import { LigneTransfert } from '@app/models/lignetransfert';
import dxToast from 'devextreme/ui/toast';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lignetransfert-form',
  templateUrl: './lignetransfert-form.component.html',
  styleUrls:  ['./lignetransfert-form.component.css']
})
export class LigneTransfertFormComponent {
  @ViewChild("lignetransfertForm") form: DxFormComponent;
  @Input() ligneTransfert: LigneTransfert;
  produits: Produit[];
  errorVisible = false;
  errorMessage = 'my message';
  type = 'error';

  buttonOptions: any = {
    text: "Enregistrer",
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
      private transfertService: TransfertService,
      private produitService: ProduitService) {
      }

  ngOnInit() {
    this.sharedDataService.currentMessage.subscribe(t => {
        if (t == 'LIGNE_TRANSFERT_REFRESH_PRODUITS') {
          this.produitService.getAll().subscribe(t => this.produits = t);
        }
     });
  }

  onValidationClick(args) {
        this.transfertService.ligneTransfertCreate(this.ligneTransfert).subscribe(t => {
            this.ligneTransfert = new LigneTransfert();
            this.sharedDataService.changeMessage('CLOSED_LIGNETRANSFERT_FORM');
        }
        ,
        (err) => {
            this.errorMessage = err.error;
            this.errorVisible = true;
        }
    );
  }
}
