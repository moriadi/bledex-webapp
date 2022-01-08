import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';
import { SharedDataService } from '@app/services/shared-data.service';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html'
})
export class CommandeDetailsComponent {
  @Input() commande: Commande;
  lignesCommandes: LigneCommande[];
  loadIndicatorVisible: boolean = false;
  isManager: boolean;

  constructor(private sharedDataService: SharedDataService,
    private authenticationService: AuthenticationService,
    private commandeService: CommandeService) {
       }

  ngOnInit() {
    this.isManager = this.authenticationService.getUserFunction() == "gestionnaire";
    this.commandeService.ligneCommandeGetByCommande(this.commande.id).subscribe(t => this.lignesCommandes = t);
  }

  deleteLigneCommande(id){
      this.commandeService.ligneCommandeDelete(id).subscribe(t => {
        this.sharedDataService.changeMessage('REFRESH_COMMANDE_LIST');
      });
  }

  public validerReception() {
    this.loadIndicatorVisible = true;
    this.commandeService.commandeReceptionner(this.commande).subscribe(t => {
      this.loadIndicatorVisible = false;
      this.sharedDataService.changeMessage('REFRESH_COMMANDE_LIST');
    });
  }
}
