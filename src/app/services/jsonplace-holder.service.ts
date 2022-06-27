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

  createPost(title: string, body: string){
    fetch(this.url + "/posts", {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((json) => alert(json));
  }

  deletePost(id: string) {
    fetch(this.url + "/posts/" + id, {
      method: 'DELETE',
    })
    .then(() => alert('Post ' + id + ' deleted.'));
  }

}
