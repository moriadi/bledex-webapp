import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Fournisseur } from '@app/models/fournisseur';
import { Produit } from '@app/models/produit';
import { ProduitService } from '@app/services/produit.service';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  templateUrl: 'produit.component.html'
})

export class ProduitComponent {
  dataSource: Produit[];
  priority: any[];
  popupVisible: boolean = false;
  public currentProduit: Produit;
  isManager: boolean = false;
    
  constructor(private sharedDataService: SharedDataService,
            private authenticationService: AuthenticationService,
            private produitService: ProduitService) {
            this.currentProduit = new Produit();
            this.produitService.getAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.isManager = this.authenticationService.getUserFunction() == "gestionnaire";
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_PRODUIT_FORM') {
         this.popupVisible = false;
         this.produitService.getAll().subscribe(t => this.dataSource = t);
       }
    });
  }

  public openForm(id) {
    if (id == 0){
      this.currentProduit = new Produit();
      this.popupVisible = true;
    } else {
      this.produitService.getById(id).subscribe(t => {
        this.currentProduit = t;
        this.popupVisible = true;
      });
    }
   
  }
}
