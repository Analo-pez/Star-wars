import { Component } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    starships: any[] = [];

    p: number = 1;

    constructor(private list: StarshipsService) {

        this.list.getList()
            .subscribe((data: any) => {
                console.log(data.results);
                this.starships = data.results;

            }, (error) => {
                alert(`Ha habido un error:  ${error}. \n \n ¡Refresca la página!`)
            })
    }





}
