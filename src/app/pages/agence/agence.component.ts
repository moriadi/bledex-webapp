import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { Agence } from '@app/models/agence';
import { TransverseService } from '@app/services/transverse.service';

@Component({
  templateUrl: 'agence.component.html'
})

export class AgenceComponent {
  dataSource: Agence[];
  priority: any[];
  popupVisible: boolean = false;

  constructor(private sharedDataService: SharedDataService,
    private transverseService: TransverseService
    ) {
    this.transverseService.agenceGetAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    
  }
  
}

