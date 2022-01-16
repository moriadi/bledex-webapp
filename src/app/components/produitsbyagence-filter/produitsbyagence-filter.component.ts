import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Agence } from '@app/models/agence';
import { ArchiveVenteFilter } from '@app/models/archiveventefilter';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-produitsbyagence-filter',
  templateUrl: './produitsbyagence-filter.component.html'
})
export class ProduitByAgenceFilterComponent {
  @ViewChild("produitByAgenceFilterForm") form: DxFormComponent;
  agences: Agence[];
  selectedAgence: Agence;
  disableAgence: boolean = true;

  buttonOptions: any = {
    text: "Rechecher",
    type: "success",
    onClick: () => {
        if(this.form.instance.validate().isValid) {
            this.onValidationClick(null);
        }
    }
  };

  constructor(private sharedDataService: SharedDataService,
      private authService: AuthenticationService,
      private transverseService: TransverseService) {
       }

  ngOnInit() {
    this.disableAgence =  this.authService.getUserFunction() == "vendeur";
    const agence = this.authService.userValue.agence;
    this.selectedAgence = agence;
    this.transverseService.agenceGetAll().subscribe(t => this.agences = t);
  }

  onValidationClick(args) {
      this.sharedDataService.pushProduitByAgenceFilter(this.selectedAgence);     
  }
}
