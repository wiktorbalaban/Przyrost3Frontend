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

const ROUTES: Routes = [
  // { path: '', redirectTo: 'arena-list', pathMatch: 'full' },
  {path: 'arena-list', component: ArenaListComponent},
  {path: 'arena-add', component: ArenaAddComponent},
  {path: 'arena-edit/:id', component: ArenaEditComponent}
];


@NgModule({
  declarations: [
    AppComponent, ArenaListComponent, ArenaItemComponent, ArenaAddComponent,
    ArenaEditComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [ArenaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
