import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { Charge } from '@app/models/charge';
import { TypeCharge } from '@app/models/typecharge';
import { ChargeService } from '@app/services/charge.service';
import { Tresorerie } from '@app/models/tresorerie';
import { TresorerieService } from '@app/services/tresorerie.service';

@Component({
  selector: 'app-tresorerie-form',
  templateUrl: './tresorerie-form.component.html'
})
export class TresorerieFormComponent {
  @ViewChild("tresorerieForm") form: DxFormComponent;
  @Input() tresorerie: Tresorerie;

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
      private tresorerieService: TresorerieService) {
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.tresorerie.id > 0){
            this.tresorerieService.update(this.tresorerie).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_TRESORERIE_FORM');
            });
        } else {
            this.tresorerieService.create(this.tresorerie).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_TRESORERIE_FORM');
            });
        }
  }
}
