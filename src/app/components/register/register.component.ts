import { ClassField } from '@angular/compiler';
import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    person: UserModel;

    constructor() {

    }

    ngOnInit() {
        this.person = new UserModel();

    }


    onSubmit(form: NgForm) {
        console.log('activo')
        console.log(this.person)
        console.log(form)
    }
}
