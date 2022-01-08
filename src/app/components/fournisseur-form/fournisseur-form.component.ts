import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Fournisseur } from '@app/models/fournisseur';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html'
})
export class FournisseurFormComponent {
  @ViewChild("fournisseurForm") form: DxFormComponent;
  @Input() fournisseur: Fournisseur;

  buttonOptions: any = {
    text: "Valider",
    type: "success",
    onClick: () => {
        if(this.form.instance.validate().isValid) {
            this.onValidationClick(null);
        }
    }
  };

  constructor(private sharedDataService: SharedDataService,
     private route: ActivatedRoute,
      private router: Router,
      private transverseService: TransverseService) {
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.fournisseur.id > 0){
            this.transverseService.fournisseurUpdate(this.fournisseur).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_FOURNISSEUR_FORM');
            });
        } else {
            this.transverseService.fournisseurCreate(this.fournisseur).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_FOURNISSEUR_FORM');
            });
        }
  }
}
