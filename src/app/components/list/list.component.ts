import { Component } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    page: string;

    options = [
        { name: "1", value: "1" },
        { name: "2", value: "2" },
        { name: "3", value: "3" },
        { name: "4", value: "4" }
    ]


    starships: any[] = [];

    loading: boolean = false;

    p: number = 1;


    constructor(private list: StarshipsService) {

    }

    print(page: string) {
        this.loading = true;
        this.list.getStarships(page)
            .subscribe((data: any) => {
                this.loading = false;
                this.starships = data.results;

            }, (error) => {
                alert(`Ha habido un error:  ${error}. \n \n ¡Refresca la página!`)
            })
    }


}
