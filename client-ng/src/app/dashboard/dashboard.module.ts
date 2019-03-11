import { NgModule } from '@angular/core';

import { AlbumComponent } from './components/album/album.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TitleComponent } from './components/title/title.component';
import { TrackComponent } from './components/track/track.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { PlayerComponent } from './components/player/player.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DashboardPage } from './pages/dashboard/dashboard.page';

import { MsToMinutesPipe } from './pipes/ms-to-minutes.pipe';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';


const components = [
  AlbumComponent,
  AlbumListComponent,
  ArtistComponent,
  ProfileComponent,
  TitleComponent,
  TrackComponent,
  TrackListComponent,
  ToggleComponent,
  SearchComponent,
  HeaderComponent,
  ArtistListComponent,
  PlayerComponent,
  SidebarComponent,
  DashboardPage
];


@NgModule({
  declarations: [...components, MsToMinutesPipe],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [],
  providers: []
})
export class DashboardModule { }
