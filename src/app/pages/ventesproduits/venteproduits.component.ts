import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { VenteService } from '@app/services/vente.service';
import { VenteProduitMensuel } from '@app/models/venteproduitsmensuel';

@Component({
  selector: 'app-vente-produits',
  templateUrl: 'venteproduits.component.html'
})

export class VenteProduitComponent {
  dataSource: VenteProduitMensuel[];
  
  constructor(
    private venteService: VenteService
    ) {
    this.venteService.ventesProduitsMensuel().subscribe(t => this.dataSource = t);
  }
}
