import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Agence } from '@app/models/agence';
import { ArchiveVenteFilter } from '@app/models/archiveventefilter';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-archive-vente-filter',
  templateUrl: './archive-vente-filter.component.html'
})
export class ArchiveVenteFilterComponent {
  @ViewChild("archiveVenteFilterForm") form: DxFormComponent;
  agences: Agence[];
  archiveVenteFilter: ArchiveVenteFilter;
  disableAgence: boolean = true;

  buttonOptions: any = {
    text: "Recheccher",
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
    this.archiveVenteFilter = new ArchiveVenteFilter();
    this.archiveVenteFilter.agence = agence;
    this.transverseService.agenceGetAll().subscribe(t => this.agences = t);
  }

  onValidationClick(args) {
      this.sharedDataService.pushVenteFilter(this.archiveVenteFilter);     
  }
}
