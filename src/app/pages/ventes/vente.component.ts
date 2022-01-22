import { Component, ViewChild } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';
import { Vente } from '@app/models/vente';
import { VenteService } from '@app/services/vente.service';
import { LigneVente } from '@app/models/lignevente';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { DxDataGridComponent } from 'devextreme-angular';
import { VenteDate } from '@app/models/ventedate';
import { Livraison } from '@app/models/livraison';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  templateUrl: 'vente.component.html'
})

export class VenteComponent {
  dataSource: Vente[];
  popupVisible: boolean = false;
  showLigneVenteForm: boolean = false;
  showConfirmVenteDialog: boolean = false;
  showFormModifyVenteDate: boolean = false;
  public currentVente: Vente;
  public currentLigneVente: LigneVente;
  public venteDate: VenteDate;
  public confirmMessage: string = '';
  loadIndicatorVisible: boolean = false;
  canUpdateVente: boolean;
  selectedRows: number[] = [];
  @ViewChild("grid") grid: DxDataGridComponent;
  errorVisible = false;
  errorMessage = 'my message';
  type = 'error';

  constructor(
    private sharedDataService: SharedDataService,
    private venteService: VenteService, 
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
      this.venteService.ventesRecentes().subscribe(
        t => this.dataSource = t);
  }

  ngOnInit() {
    this.canUpdateVente = this.authenticationService.getUserFunction() != "comptable";
    this.currentVente = new Vente();
    this.currentLigneVente = new LigneVente(); 
    this.venteDate = new VenteDate();
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_VENTE_FORM') {
         this.popupVisible = false;
         this.refreshVenteList();
        } else if (t == 'CLOSED_LIGNEVENTE_FORM') {
          this.showLigneVenteForm = false;
          this.currentLigneVente = null;
          this.openLigneVenteForm(this.currentVente);
          this.refreshVenteList();
        } else if (t == 'REFRESH_VENTE_LIST'){
          this.refreshVenteList();
        } else if (t == 'CLOSED_VENTE_DATE_FORM') {
          this.showFormModifyVenteDate = false;
          this.refreshVenteList();
        }      
    });

    this.sharedDataService.currentLivraison.subscribe(t => {
       if (t == null) {
          this.showConfirmVenteDialog = false;
       } else {
          this.showConfirmVenteDialog = false;
          this.loadIndicatorVisible = true;
          this.validerLivraison(t);
       }
    });
  }

  refreshVenteList(){
    this.venteService.ventesRecentes().subscribe(
      t => this.dataSource = t);
  }

  public openForm(id) {
    if (id == 0){
      this.currentVente = new Vente();
      this.popupVisible = true;
    } else {
      this.venteService.venteGetById(id).subscribe(t => {
        this.currentVente = t;
        this.popupVisible = true;
      });
    }   
  }

  public openFormEditDate() {
    let selectedVentes: Vente[] = this.grid.instance.getSelectedRowsData();
    this.venteDate.ventes = selectedVentes.map(t => t.id);
    this.showFormModifyVenteDate = true;
  }

  public openLigneVenteForm(vente: Vente) {
      this.currentVente = vente;
      this.currentLigneVente = new LigneVente();
      this.currentLigneVente.vente = vente;
      this.currentLigneVente.venteId = vente.id;
      this.showLigneVenteForm = true;
      this.sharedDataService.changeMessage("LIGNE_VENTE_REFRESH_PRODUITS")
  } 

  public validerLivraison(livraison: Livraison) {
    livraison.venteId = this.currentVente.id;
    // if (livraison.montant != this.currentVente.total && this.currentVente.total > livraison.montant){
    //    if (((this.currentVente.total - livraison.reduction)/this.currentVente.total) > 0.10){
    //       this.errorMessage = "la réduction est supérieure au montant Maximum";
    //       this.errorVisible = true;
    //       this.loadIndicatorVisible = false;
    //       return;
    //    }
    // }

    this.venteService.venteLivrer(livraison).subscribe(t => {
      this.loadIndicatorVisible = false;
      this.refreshVenteList();
    });
    
  }

  public validerVenteDialog(vente: Vente) {
    this.currentVente = vente;
    this.confirmMessage = "Confirmez la vente pour le client " + vente.client.raisonSociale;
    this.showConfirmVenteDialog = true;
  }

  public printInvoice(id){
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/facture/' + id])
    );
  
    // window.open(url, '_blank');
    window.open(url.toString(), "Facture", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=600, left=10 top=100");
  }
}
