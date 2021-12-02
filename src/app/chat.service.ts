import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

import { Observable, throwError, of, from } from 'rxjs';
import { ChannelComponent } from './channel/channel.component';


  export interface Post {
    username: string,
    message: string,
    id: string,
    created_On: Date,
    updated_On: Date
  }
  

  @Injectable({
    providedIn: 'root'
  })
  export class chatMessage {
  
    private webUrl = " http://73.19.65.35:3500/api";
  
    private data: any[] = [
        {
          
        }
    ];
  
    constructor(private http: HttpClient) { }
  
  

    // read all
    getAllChannels(): Observable<any[]> {
      console.log("get all posts fired");
      return this.http.get<any[]>(`${this.webUrl}/channel`);
    }
  

    // create
  creatPost(body:any):Observable <any> {
    return this.http.post<any>(`${this.webUrl}/channel/rmarin`,body);
  }
  
    // update
    patchPost(body:Post):Observable <Post> {
  return this.http.patch<Post>(`${this.webUrl}/channel/rmarin`,body)
    }
  
  
    // delete
    deletePost(name:string): Observable<Post>{
      return this.http.delete<Post>(`${this.webUrl}channel//rmarin/${name}`);
    }
  }
  