import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { Charge } from '@app/models/charge';
import { TypeCharge } from '@app/models/typecharge';
import { ChargeService } from '@app/services/charge.service';

@Component({
  selector: 'app-charge-form',
  templateUrl: './charge-form.component.html'
})
export class ChargeFormComponent {
  @ViewChild("chargeForm") form: DxFormComponent;
  @Input() charge: Charge;
  typecharges: TypeCharge[];

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
      private chargeService: ChargeService) {
          this.chargeService.typeChargeGetAll().subscribe(t => this.typecharges = t);
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.charge.id > 0){
            this.chargeService.update(this.charge).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_CHARGE_FORM');
            });
        } else {
            this.chargeService.create(this.charge).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_CHARGE_FORM');
            });
        }
  }
}
