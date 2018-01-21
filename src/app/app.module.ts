import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ArenaListComponent} from './components/arena/arena-list/arena-list.component';
import {ArenaItemComponent} from './components/arena/arena-item/arena-item.component';
import {ArenaService} from './service/arena.service';
import {ArenaAddComponent} from './components/arena/arena-add/arena-add.component';
import {ArenaEditComponent} from './components/arena/arena-edit/arena-edit.component';
import {NicknameListComponent} from './components/nickname/nickname-list/nickname-list.component';
import {NicknameAddComponent} from './components/nickname/nickname-add/nickname-add.component';
import {NicknameEditComponent} from './components/nickname/nickname-edit/nickname-edit.component';
import {NicknameItemComponent} from './components/nickname/nickname-item/nickname-item.component';
import {NicknameService} from './service/nickname.service';
import {ArenaListPagedComponent} from './components/arena/arena-list-paged/arena-list-paged.component';

const ROUTES: Routes = [
  // { path: '', redirectTo: 'nickname-list', pathMatch: 'full' },
  {path: 'arena-list', component: ArenaListComponent},
  {path: 'arena-add', component: ArenaAddComponent},
  {path: 'arena-edit/:id', component: ArenaEditComponent},
  {path: 'arena-list-paged', component: ArenaListPagedComponent},
  {path: 'nickname-list', component: NicknameListComponent},
  {path: 'nickname-add', component: NicknameAddComponent},
  {path: 'nickname-edit/:id', component: NicknameEditComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ArenaListComponent, ArenaItemComponent, ArenaAddComponent, ArenaEditComponent, ArenaListPagedComponent,
    NicknameItemComponent, NicknameListComponent, NicknameEditComponent, NicknameAddComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [ArenaService, NicknameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
