import { Component, OnInit } from '@angular/core';
import {Post, chatMessage } from './../chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: any[] = [];

  posts: Post[] = [];

  constructor(private messages: chatMessage) { }

  ngOnInit() {
    
  }


  addNewItem() {
    let newPost: Post = {
      username: "success ",
      message: "ayyy",
      id: "4",
      created_On:new Date,
      updated_On: new Date
    };


   
    console.log("new post item",newPost);
    
    let value = this.messages.creatPost(newPost).subscribe(data =>{
      console.log('value returned', data);

    });

}



}
