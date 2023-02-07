import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { UserClass } from 'src/UserClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

 url:string="http://localhost:8011/api/user/";

  constructor(private httpclient:HttpClient) { }

  // get all user by http call and pass API or URL
  getAllUser():Observable<UserClass[]>{
    return this.httpclient.get<UserClass[]>(this.url);
  }

  // create or submit all user details in database
  create(data: any): Observable<any> {                              // data is a new value which we will post
    return this.httpclient.post(this.url, data).pipe(
      catchError(this.handleError)
      );
  }

  login(data:any):Observable<any>{
    console.log("I am a server");
    return this.httpclient.post(this.url, data)
  }

   // Handle API errors
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


}
