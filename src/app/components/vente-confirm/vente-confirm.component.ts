import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Livraison } from '@app/models/livraison';
import { SharedDataService } from '@app/services/shared-data.service';


@Component({
  selector: 'app-vente-confirm',
  templateUrl: './vente-confirm.component.html'
})
export class VenteConfirmComponent {
  @Input() message: string;
  hasReduction: boolean = false;
  amount: number = 0; 
  constructor(private sharedDataService: SharedDataService) {
    }

  ngOnInit() {}

  public ouiClick(){
    let livraison: Livraison = new Livraison(0);
    // if (this.hasReduction){
    //     livraison.montant = this.amount;
    // }
    this.sharedDataService.pushLivraison(livraison);
  }

  public nonClick(){
    this.sharedDataService.pushLivraison(null);
  }
  
}
