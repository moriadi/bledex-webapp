import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { SharedDataService } from '@app/services/shared-data.service';
import { Tresorerie } from '@app/models/tresorerie';
import { TresorerieService } from '@app/services/tresorerie.service';

@Component({
  templateUrl: 'tresorerie.component.html'
})

export class TresorerieComponent {
  dataSource: Tresorerie[];
  priority: any[];
  popupVisible: boolean = false;
  public currentTresorerie: Tresorerie;
  
  constructor(private tresorerieService: TresorerieService,
    private sharedDataService: SharedDataService
    ) {
    this.tresorerieService.getAll().subscribe(t => this.dataSource = t);
  }

  ngOnInit() {
    this.currentTresorerie = new Tresorerie();
    this.sharedDataService.currentMessage.subscribe(t => {
       if (t == 'CLOSED_TRESORERIE_FORM') {
         this.popupVisible = false;
        } 
        this.refreshList();
    });
  }

  refreshList(){
    this.tresorerieService.getAll().subscribe(t => this.dataSource = t);
  }

  public openForm(id) {
    if (id == 0){
      this.currentTresorerie = new Tresorerie();
      this.popupVisible = true;
    } else {
      this.tresorerieService.getById(id).subscribe(t => {
        this.currentTresorerie = t;
        this.popupVisible = true;
      });
    }   
  }
}
