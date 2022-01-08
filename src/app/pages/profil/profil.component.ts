import { Component, NgModule, ViewChild, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { AuthenticationService } from '@app/services/authentication.service';
import { ChangePassword } from '@app/models/changepasword';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html'
})
export class ProfilComponent {
  @ViewChild("changePasswordForm") form: DxFormComponent;
  public changePassword: ChangePassword;

  buttonOptions: any = {
    text: "Modifier",
    type: "success",
    onClick: () => {
        if(this.form.instance.validate().isValid) {
            this.onValidationClick(null);
        }
    }
  };

  constructor(private userService: UserService,
      private authenticationService: AuthenticationService) {
       }

  ngOnInit() {
       const user = this.authenticationService.userValue;
       this.changePassword = new ChangePassword();
       this.changePassword.email = user.email;
  }

  onValidationClick(args) {
      this.userService.changepassword(this.changePassword).subscribe(t => {
         this.authenticationService.logout();
      });
  }
}
