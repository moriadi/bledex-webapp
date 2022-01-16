import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Client } from '@app/models/client';
import { ClientService } from '@app/services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html'
})
export class ClientFormComponent {
  @ViewChild("clientForm") form: DxFormComponent;
  @Input() client: Client;

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
      private clientService: ClientService,
      private transverseService: TransverseService) {
       }

  ngOnInit() {
  }

  onValidationClick(args) {
        if (this.client.id > 0){
            this.clientService.update(this.client).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_CLIENT_FORM');
            });
        } else {
            this.clientService.create(this.client).subscribe(t => {
                this.sharedDataService.changeMessage('CLOSED_CLIENT_FORM');
            });
        }
  }
}
