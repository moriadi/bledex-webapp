import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Fournisseur } from '@app/models/fournisseur';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  templateUrl: 'fournisseur.component.html'
})

export class FournisseurComponent {
  dataSource: Fournisseur[];
  priority: any[];
  popupVisible: boolean = false;
  public currentFournisseur: Fournisseur;
  isManager: boolean;
  
  constructor(private sharedDataService: SharedDataService,
    private transverseService: TransverseService,
    private authenticationService: AuthenticationService
    ) {
    this.transverseService.fournisseurGetAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.isManager = this.authenticationService.getUserFunction() == "gestionnaire";
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_FOURNISSEUR_FORM') {
         this.popupVisible = false;
         this.transverseService.fournisseurGetAll().subscribe(t => this.dataSource = t);
       }
    });
  }
  public openForm(id) {
    if (id == 0){
      this.currentFournisseur = new Fournisseur();
      this.popupVisible = true;
    } else {
      this.transverseService.fournisseurGetById(id).subscribe(t => {
        this.currentFournisseur = t;
        this.popupVisible = true;
      });
    }
   
  }
}
