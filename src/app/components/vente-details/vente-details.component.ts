import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { Vente } from '@app/models/vente';
import { VenteService } from '@app/services/vente.service';
import { LigneVente } from '@app/models/lignevente';
import { SharedDataService } from '@app/services/shared-data.service';

@Component({
  selector: 'app-vente-details',
  templateUrl: './vente-details.component.html'
})
export class VenteDetailsComponent {
  @Input() vente: Vente;
  lignesVentes: LigneVente[];

  constructor(private sharedDataService: SharedDataService,
    private venteService: VenteService) {
       }

  ngOnInit() {
    this.venteService.ligneventeGetByvente(this.vente.id).subscribe(t => this.lignesVentes = t);
  } 

  deleteLigneVente(id){
    this.venteService.ligneventeDelete(id).subscribe(t => {
        this.sharedDataService.changeMessage('REFRESH_VENTE_LIST');
      });
  }
}
