import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { SharedDataService } from '@app/services/shared-data.service';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
  @Input() message: string;
  
  constructor(private sharedDataService: SharedDataService) {
    }

  ngOnInit() {}

  public ouiClick(){
    this.sharedDataService.changeMessage('YES');
  }

  public nonClick(){
    this.sharedDataService.changeMessage('NO');
  }
  
}
