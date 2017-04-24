import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewestCasinosComponent } from './newest-casinos/newest-casinos.component';
import {rootRouterConfig} from "./app.routes";
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "angularfire2";
import {KeysPipe} from "./shared/pipe/keys.pipe";
import {DataListModule, DialogModule, ButtonModule, InputTextModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.service";
import {CasinoNewsComponent} from "./casino-news/casino-news.component";
import {NewestSlotsComponent} from "./newest-slots/newest-slots.component";
import {RecommendedBonusesComponent} from "./recommended-bonuses/recommended-bonuses.component";
import {MembersComponent} from "./members/members.component";
import {AddNewestComponent} from "./add-newest/add-newest.component";
import {NewestComponent} from "./newest/newest.component";
import {EditNewestComponent} from "./edit-newest-component/edit-newest-component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FirebaseService} from "./shared/firebase.service";

export const firebaseConfig = {
  apiKey: "AIzaSyBPL8CuFSt-dfyWeWD8mG9ld-Whp9RS6dU",
  authDomain: "appadmin-3e908.firebaseapp.com",
  databaseURL: "https://appadmin-3e908.firebaseio.com",
  projectId: "appadmin-3e908",
  storageBucket: "appadmin-3e908.appspot.com",
  messagingSenderId: "773332166368"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MembersComponent,
    AddNewestComponent,
    NewestComponent,
    EditNewestComponent,
    NavbarComponent,
    RecommendedBonusesComponent,
    NewestSlotsComponent,
    CasinoNewsComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ButtonModule,
    DataListModule,
    DialogModule,
    InputTextModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [KeysPipe],
  providers: [AuthGuard, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
