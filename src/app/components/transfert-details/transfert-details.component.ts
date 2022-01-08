import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Transfert } from '@app/models/transfert';
import { AuthenticationService } from '@app/services/authentication.service';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransfertService } from '@app/services/transfert.service';

@Component({
  selector: 'app-transfert-details',
  templateUrl: './transfert-details.component.html'
})
export class TransfertDetailsComponent {
  @Input() transfert: Transfert;
  
  loadIndicatorVisible: boolean = false;
  isManager: boolean;


  constructor(private sharedDataService: SharedDataService,
    private authenticationService: AuthenticationService,
    private transfertService: TransfertService) {
       }

  ngOnInit() {
    this.isManager = this.authenticationService.getUserFunction() == "gestionnaire";

  }

  deleteLigneTransfert(id){
      this.transfertService.ligneTransfertDelete(id).subscribe(t => {
        this.sharedDataService.changeMessage('REFRESH_TRANSFERT_LIST');
      });
  }
 
  public validerReception() {
    this.loadIndicatorVisible = true;
    this.transfertService.valider(this.transfert).subscribe(t => {
      this.loadIndicatorVisible = false;
      this.sharedDataService.changeMessage('REFRESH_TRANSFERT_LIST');
    });
  }
}

