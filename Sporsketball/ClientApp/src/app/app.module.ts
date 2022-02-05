import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { SportsBoardComponent } from './sports-board/sports-board.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { SearchComponent } from './search/search.component';
import { IndividualTeamComponent } from './individual-team/individual-team.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    CreateUserComponent,
    UpdateUserComponent,
    FavoritesListComponent,
    SportsBoardComponent,
    CurrentEventsComponent,
    SearchComponent,
    IndividualTeamComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: 'update-user', component: UpdateUserComponent },
      { path: 'favorites-list', component: FavoritesListComponent },
      { path: 'sports-board', component: SportsBoardComponent },
      { path: 'current-events', component: CurrentEventsComponent },
      { path: 'search', component: SearchComponent },
      { path: 'team-detail/:teamId', component: IndividualTeamComponent },
      { path: 'create-post', component: CreatePostComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
