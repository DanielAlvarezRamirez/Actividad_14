import { Component, OnInit } from '@angular/core';
import { JSONPlaceHolderService } from './services/jsonplace-holder.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isPosts: boolean = true;
  isPhotos: boolean = false;
  isUsers: boolean = false;
  data: Array<any>;

  constructor(private JSONPlaceHolder:JSONPlaceHolderService){
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getPostsFromAPI();
  }

  getPostsFromAPI(){
    this.changeSelected('posts');
    this.JSONPlaceHolder.getPosts().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

  getPhotosFromAPI(){
    this.changeSelected('photos');
    this.JSONPlaceHolder.getPhotos().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

  getUsersFromAPI(){
    this.changeSelected('users');
    this.JSONPlaceHolder.getUsers().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

  changeSelected(selectedResource : string): void{
    if(selectedResource === 'posts'){
      this.isPosts = true;
      this.isPhotos = false;
      this.isUsers = false;
    } else if(selectedResource === 'photos') {
      this.isPosts = false;
      this.isPhotos = true;
      this.isUsers = false;
    } else if(selectedResource === 'users'){
      this.isPosts = false;
      this.isPhotos = false;
      this.isUsers = true;
    }
  }
}
