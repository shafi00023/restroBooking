import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      console.log('Form submitted:', loginForm.value);
    }
  }

}
