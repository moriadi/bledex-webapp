import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { TransverseService } from '@app/services/transverse.service';
import { Quartier } from '@app/models/quartier';
import { ClientService } from '@app/services/client.service';
import { Client } from '@app/models/client';

@Component({
  templateUrl: 'client.component.html'
})

export class ClientComponent {
  dataSource: Client[];
  priority: any[];
  popupVisible: boolean = false;
  confirmClientCreatePopup: boolean = false;
  public currentClient: Client;
  public currentClientIdToCreate: number;

  constructor(private sharedDataService: SharedDataService,
    private clientService: ClientService
    ) {
    this.currentClient = new Client();
    this.clientService.getAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_CLIENT_FORM') {
         this.popupVisible = false;
         this.clientService.getAll().subscribe(t => this.dataSource = t);
       }
    });
  }
  
  public openForm(id) {
    if (id == 0){
      this.currentClient = new Client();
      this.popupVisible = true;
    } else {
      this.clientService.getById(id).subscribe(t => {
        this.currentClient = t;
        this.popupVisible = true;
      });
    }  
  }
}
