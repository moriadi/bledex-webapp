import { Component } from '@angular/core';
import { FactureService } from '@app/services/facture.service';
import { Facture } from '@app/models/facture';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'facture.component.html'
})

export class FactureComponent {
  
  public facture: Facture;
  constructor(private factureService: FactureService, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.factureService
           .get(this.activatedRoute.snapshot.params.vente_id)
           .subscribe(t => this.facture = t);
  }
}
