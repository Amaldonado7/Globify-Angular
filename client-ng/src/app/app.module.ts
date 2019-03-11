import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppPage } from './app.page';

import { UserService } from './services/user.service';
import { MusicService } from './services/music.service';
import { SpotifyService } from './services/spotify.service';
import { AppService } from './services/app.service';

import { NotFoundPage } from './dashboard/pages/404/notFound.page';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppPage,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    DashboardModule
  ],
  providers: [
    UserService,
    MusicService,
    SpotifyService,
    AppService
  ],
  bootstrap: [AppPage]
})
export class AppModule { }
