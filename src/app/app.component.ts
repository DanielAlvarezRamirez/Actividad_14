import { Component, OnInit } from '@angular/core';
import { JSONPlaceHolderService } from './services/jsonplace-holder.service'; 
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isPosts: boolean = true;
  isPhotos: boolean = false;
  isUsers: boolean = false;


  //-------------- Table configuration---------------------------------
  data: Array<any> = [];
  postsDataSource = new MatTableDataSource<Post>();
  photosDataSource = new MatTableDataSource<Photo>();
  usersDataSource = new MatTableDataSource<User>();

  postsDisplayedColumns: string[] = ['title', 'body', 'actions'];
  photosDisplayedColumns: string[] = ['title', 'url', 'thumbnailUrl', 'actions'];
  usersDisplayedColumns: string[] = ['name', 'username', 'email', 'phone', 'website'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.postsDataSource.paginator = this.paginator;
    this.photosDataSource.paginator = this.paginator;
    this.usersDataSource.paginator = this.paginator;
  }
  //-------------------------------------------------------------------

  constructor(private JSONPlaceHolder:JSONPlaceHolderService){
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getPostsFromAPI();
    this.getPhotosFromAPI();
    this.getUsersFromAPI();
  }

  createPost(data: any){
    this.JSONPlaceHolder.createPost(data.title, data.body);
  }

  editPost(id: string, data: any){    
    this.JSONPlaceHolder.editPost(id, data.title, data.body);
  }

  deletePost(id: string) {
    this.JSONPlaceHolder.deletePost(id);
  }

  getPostsFromAPI(){
    this.JSONPlaceHolder.getPosts().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.postsDataSource.data = this.data;
    })
  }

  getPhotosFromAPI(){
    this.JSONPlaceHolder.getPhotos().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.photosDataSource.data = this.data;
    })
  }

  getUsersFromAPI(){
    this.JSONPlaceHolder.getUsers().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.usersDataSource.data = this.data;
    })
  }

  changeSelected(selectedResource : string): void{
    if(selectedResource === 'posts'){
      this.postsDataSource.paginator = this.paginator;
      this.isPosts = true;
      this.isPhotos = false;
      this.isUsers = false;
    } else if(selectedResource === 'photos') {
      this.photosDataSource.paginator = this.paginator;
      this.isPosts = false;
      this.isPhotos = true;
      this.isUsers = false;
    } else if(selectedResource === 'users'){
      this.usersDataSource.paginator = this.paginator;
      this.isPosts = false;
      this.isPhotos = false;
      this.isUsers = true;
    }
  }
}

interface Post {
  title: string,
  body: string
}
interface Photo {
  title: string,
  url: string,
  thumbnailUrl: string
}
interface User {
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}