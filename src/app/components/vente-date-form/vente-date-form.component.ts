import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { VenteDate } from '@app/models/ventedate';
import { VenteService } from '@app/services/vente.service';

@Component({
  selector: 'app-vente-date-form',
  templateUrl: './vente-date-form.component.html'
})
export class VenteDateFormComponent {
  @ViewChild("venteDateForm") form: DxFormComponent;
  @Input() venteDate: VenteDate;
  selectedDate: Date;

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
      private venteService: VenteService) {
       }

  ngOnInit() {
  }

  onValidationClick(args) {
      this.venteDate.date = this.venteDate.selectedDate.toLocaleDateString();
      this.venteService.venteEditDate(this.venteDate).subscribe(t => {
      this.sharedDataService.changeMessage('CLOSED_VENTE_DATE_FORM');
    });
  }
}
