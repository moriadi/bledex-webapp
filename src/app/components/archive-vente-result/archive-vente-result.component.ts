import { Component } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';
import { Vente } from '@app/models/vente';
import { VenteService } from '@app/services/vente.service';
import { LigneVente } from '@app/models/lignevente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive-vente-result',
  templateUrl: 'archive-vente-result.component.html'
})

export class ArchiveVenteResultComponent {
  dataSource: Vente[]; 
  constructor(private sharedDataService: SharedDataService,
    private venteService: VenteService, private router: Router
    ) { }

  ngOnInit() {
    this.sharedDataService.currentVenteFilter.subscribe(t => { 
      if (t != null) {
        this.venteService.archivesVentes(t).subscribe(t => this.dataSource = t);
      }
    });
  }

  public printInvoice(id){
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/facture/' + id])
    );
  
    // window.open(url, '_blank');
    window.open(url.toString(), "Facture", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=600, left=10 top=100");
  }
}
