import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Produit } from '@app/models/produit';
import { ProduitService } from '@app/services/produit.service';

@Component({
  templateUrl: 'produit-a-commander.component.html'
})

export class ProduitACommanderComponent {
  dataSource: Produit[];
  
  constructor(private produitService: ProduitService) {
     this.produitService.acommander().subscribe(t => this.dataSource = t);
  }
}
