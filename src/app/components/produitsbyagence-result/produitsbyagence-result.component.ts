import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Fournisseur } from '@app/models/fournisseur';
import { Produit } from '@app/models/produit';
import { ProduitService } from '@app/services/produit.service';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-produitsbyagence-result',
  templateUrl: 'produitsbyagence-result.component.html'
})

export class ProduitByAgenceResultComponent {
  dataSource: Produit[];
  isManager: boolean = false;
    
  constructor(private sharedDataService: SharedDataService,
            private authenticationService: AuthenticationService,
            private produitService: ProduitService) {
  }

  ngOnInit() {
    this.isManager = this.authenticationService.getUserFunction() == "gestionnaire";
    this.sharedDataService.currentAgenceToFilterProduit.subscribe(t => {
       if (t !== null) {
         this.produitService.getByAgence(t.id).subscribe(t => this.dataSource = t);
       }
    });
  }
}
