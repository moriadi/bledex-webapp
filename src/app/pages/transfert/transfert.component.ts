import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';
import { Router } from '@angular/router';
import { Transfert } from '@app/models/transfert';
import { TransfertService } from '@app/services/transfert.service';
import { LigneTransfert } from '@app/models/lignetransfert';

@Component({
  templateUrl: 'transfert.component.html'
})
 
export class TransfertComponent {
  dataSource: Transfert[];
  priority: any[];
  popupVisible: boolean = false;
  showLigneTransfertForm: boolean = false;
  public currentTransfert: Transfert;
  public currentLigneTransfert: LigneTransfert;
  
  constructor(private sharedDataService: SharedDataService,
    private router: Router,
    private transfertService: TransfertService
    ) {
    this.transfertService.getAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.currentTransfert = new Transfert();
    this.currentLigneTransfert = new LigneTransfert();
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_TRANSFERT_FORM') {
         this.popupVisible = false;
        } else if (t == 'CLOSED_LIGNETRANSFERT_FORM') {
          this.showLigneTransfertForm = false;
        }
        this.refreshTransfertList();
    });
  }

  refreshTransfertList(){
    this.transfertService.getAll().subscribe(t => this.dataSource = t);
  }

  public openForm(id) {
    if (id == 0){
      this.currentTransfert = new Transfert();
      this.popupVisible = true;
    } else {
      this.transfertService.getById(id).subscribe(t => {
        this.currentTransfert = t;
        this.popupVisible = true;
      });
    }   
  }

  public openLigneTransfertForm(data: Transfert) {
      this.currentLigneTransfert.transfert = data;
      this.showLigneTransfertForm = true;
      this.sharedDataService.changeMessage("LIGNE_TRANSFERT_REFRESH_PRODUITS");
  }
}
