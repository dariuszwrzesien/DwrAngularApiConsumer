import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IBook } from '../shared/interfaces';

@Injectable()
export class DataService {
    booksUrl = '/api/books';

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.booksUrl)
            .pipe(
                   map((book: IBook[]) => {
                       return book;
                   }),
                   catchError(this.handleError)
                );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
