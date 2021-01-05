import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class StarshipsService {

    constructor(private http: HttpClient) {
    }

    getQuery(query: string) {
        const url = `https://swapi.dev/api/${query}`;

        return this.http.get<any>(url);
    }

    getList(): Observable<any> {
        return this.getQuery(`starships/`)
            .pipe(catchError(this.handleError))
    }
    // getIssues(number: string): Observable<any> {
    //     return this.getQuery(`starships/?page=${number}`)
    //         .pipe(catchError(this.handleError))
    // }
    handleError(error: any) {
        return throwError(error.message);
    }
}