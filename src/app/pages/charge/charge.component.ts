import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { Charge } from '@app/models/charge';
import { ChargeMensuelle } from '@app/models/chargemensuelle';
import { ChargeService } from '@app/services/charge.service';

@Component({
  templateUrl: 'charge.component.html'
})

export class ChargeComponent {
  dataSource: ChargeMensuelle[];
  priority: any[];
  popupVisible: boolean = false;
  public currentCharge: Charge;
  loadIndicatorVisible: boolean = false;
  
  constructor(private chargeService: ChargeService,
    private sharedDataService: SharedDataService
    ) {
    this.chargeService.getAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.currentCharge = new Charge();
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_CHARGE_FORM') {
         this.popupVisible = false;
        } 
        this.refreshList();
    });
  }

  refreshList(){
    this.chargeService.getAll().subscribe(t => this.dataSource = t);
  }

  clotureCharges(currentMois) {
    this.loadIndicatorVisible = true;
    this.chargeService.cloturer(currentMois)
         .subscribe(t => {
               this.loadIndicatorVisible = false;
               this.refreshList();
         });
  }

  public openForm(id) {
    if (id == 0){
      this.currentCharge = new Charge();
      this.popupVisible = true;
    } else {
      this.chargeService.getById(id).subscribe(t => {
        this.currentCharge = t;
        this.popupVisible = true;
      });
    }   
  }
}
