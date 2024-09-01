import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get(`https://reqres.in/api/users`).pipe(
      map((resdata)=>{
         return resdata;
      })
    )
  }
}
