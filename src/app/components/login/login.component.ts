import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  person: UserModel;
  userRegister: UserModel;

  constructor(private router: Router) {

  }
  ngOnInit() {
    this.person = new UserModel();

  }

  login(form: NgForm) {
    this.userRegister = JSON.parse(localStorage.getItem('usuario'));

    if (form.invalid) {
      return;
    }
    if (this.userRegister == null) {
      alert('No está en el registro')
    }
    if (this.person.password !== this.userRegister.password || this.person.userName !== this.userRegister.userName) {
      alert('Los datos introducidos no coinciden')
    }
    if (this.person.password === this.userRegister.password && this.person.userName === this.userRegister.userName) {
      this.router.navigate(['listStarships']);
      console.log('tiene acceso')
    }

  }

}
