import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, chatMessage } from './../chat.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})


export class ChannelComponent implements OnInit {

  data: any[] = [];

  posts: Post[] = [];

  constructor(private Channel: HttpClient) { }

  ngOnInit() {
  
  }
 

  }
