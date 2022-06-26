import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceHolderService {

  url ="https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url + "/posts");
  } 

  getPhotos(): Observable<any> {
    return this.http.get<any>(this.url + "/photos");
  } 

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url + "/users");
  } 

}
