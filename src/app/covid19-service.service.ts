import { Injectable } from '@angular/core';
import { CovidCase } from './covid-case';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Covid19ServiceService {
  constructor(private httpclientService: HttpClient) {}

  getNepalData(): Observable<CovidCase[]> {
    return this.httpclientService
      .get<CovidCase[]>('http://localhost:8080/nepal/current-case')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  getWorldData(): Observable<CovidCase[]> {
    return this.httpclientService
      .get<CovidCase[]>('http://localhost:8080/world/current-case')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
