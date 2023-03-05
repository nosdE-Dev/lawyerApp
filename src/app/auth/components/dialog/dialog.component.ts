import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ErrorAuth } from '../../interfaces/auth.interface';
import { RegisterError } from '../../interfaces/register.interface';
export interface DialogData {
  loginError: ErrorAuth;
  registerError: RegisterError;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})

export class DialogComponent {

  public error: string | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

    if(data.registerError){

      this.error = data.registerError.full_name +'\n'+
      data.registerError.password+'\n'+
      data.registerError.email+'\n'+
      data.registerError.phone+'\n'+
      data.registerError.billing_address+'\n'+
      data.registerError.country+'\n'+
      data.registerError.default_shipping_address;

    } else {

      this.error = data.loginError.message + '';
    }

  }
}
