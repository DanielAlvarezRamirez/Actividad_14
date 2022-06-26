import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceHolderService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/posts";

    return this.http.get<any>(url);
  }
}
