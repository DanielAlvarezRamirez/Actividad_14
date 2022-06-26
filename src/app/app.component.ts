import { Component } from '@angular/core';
import { JSONPlaceHolderService } from './services/jsonplace-holder.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Array<any>;

  constructor(private JSONPlaceHolder:JSONPlaceHolderService){
    this.data = new Array<any>();
  }

  getPostsFromAPI(){
    this.JSONPlaceHolder.getPosts().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

  getPhotosFromAPI(){
    this.JSONPlaceHolder.getPhotos().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

  getUsersFromAPI(){
    this.JSONPlaceHolder.getUsers().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }
}
