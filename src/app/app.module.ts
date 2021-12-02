import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { chatMessage } from './chat.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { ChannelComponent } from './channel/channel.component';



@NgModule({
  declarations: [					
    AppComponent,
      MainComponent,
      ChannelComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [chatMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
