import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transfert } from '@app/models/transfert';
import { Agence } from '@app/models/agence';
import { TransfertService } from '@app/services/transfert.service';

@Component({
  selector: 'app-transfert-form',
  templateUrl: './transfert-form.component.html'
})
export class TransfertFormComponent {
  @ViewChild("transfertForm") form: DxFormComponent;
  @Input() transfert: Transfert;
  agences: Agence[];

  buttonOptions: any = {
    text: "Register",
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
      private transfertService: TransfertService,
      private transverseService: TransverseService) {
          this.transverseService.agenceGetAll().subscribe(t => this.agences = t);
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.transfert.id > 0){
            this.transfertService.update(this.transfert).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_TRANSFERT_FORM');
            });
        } else {
            this.transfertService.create(this.transfert).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_TRANSFERT_FORM');
            });
        }
  }
}
