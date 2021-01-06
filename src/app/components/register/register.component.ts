import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    person: UserModel;

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.person = new UserModel();

    }


    onSubmit(form: NgForm) {
        localStorage.setItem('usuario', JSON.stringify(this.person))
        if (form.invalid) {
            return;
        } else {
            this.router.navigate(['login']);
        }
    }
}
