import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  person: UserModel;
  userRegister: UserModel;

  constructor() {

  }
  ngOnInit() {
    this.person = new UserModel();

  }

  login(form: NgForm) {
    this.userRegister = JSON.parse(localStorage.getItem('usuario'));

    if (form.invalid) {
      return;
    }
    if (this.person.password === this.userRegister.password && this.person.userName === this.userRegister.userName) {
      console.log('tiene acceso')
    }

  }

}
