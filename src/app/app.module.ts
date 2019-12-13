import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent} from './component/index/index.component';
import { PlayersComponent } from './component/players/players.component';
import { JobsComponent } from './component/jobs/jobs.component';
import { PlayerJobsComponent } from './component/player-jobs/player-jobs.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PlayersComponent,
    JobsComponent,
    PlayerJobsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
