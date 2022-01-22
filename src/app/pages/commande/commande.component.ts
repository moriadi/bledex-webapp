import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { Commande } from '@app/models/commande';
import { CommandeService } from '@app/services/commande.service';
import { LigneCommande } from '@app/models/lignecommande';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  templateUrl: 'commande.component.html'
})
 
export class CommandeComponent {
  dataSource: Commande[];
  priority: any[];
  popupVisible: boolean = false;
  showLigneCommandeForm: boolean = false;
  public currentCommande: Commande;
  public currentLigneCommande: LigneCommande;
  isManager: boolean;
  
  constructor(private sharedDataService: SharedDataService,
    private router: Router,
    private commandeService: CommandeService,
    private authenticationService: AuthenticationService
    ) {
    this.commandeService.commandeGetAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.isManager = this.authenticationService.getUserFunction() == "gestionnaire";
    this.currentCommande = new Commande();
    this.currentLigneCommande = new LigneCommande();
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_COMMANDE_FORM') {
         this.popupVisible = false;
        } else if (t == 'CLOSED_LIGNECOMMANDE_FORM') {
          this.showLigneCommandeForm = false;
          this.openLigneCommandeForm(this.currentCommande);
        }
        this.refreshCommandeList();
    });
  }

  refreshCommandeList(){
    this.commandeService.commandeGetAll().subscribe(t => this.dataSource = t);
  }

  public openForm(id) {
    if (id == 0){
      this.currentCommande = new Commande();
      this.popupVisible = true;
    } else {
      this.commandeService.commandeGetById(id).subscribe(t => {
        this.currentCommande = t;
        this.popupVisible = true;
      });
    }   
  }

  public openLigneCommandeForm(commande: Commande) {
      this.currentCommande = commande;
      this.currentLigneCommande.commande = commande;
      this.currentLigneCommande.commandeId = commande.id;
      this.showLigneCommandeForm = true;
      this.sharedDataService.changeMessage("LIGNE_COMMANDE_REFRESH_PRODUITS")
  }
}
