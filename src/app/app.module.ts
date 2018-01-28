import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.component';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    UserModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ]
})
export class AppModule { }
