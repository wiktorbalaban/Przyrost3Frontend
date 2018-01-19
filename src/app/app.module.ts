import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {ArenaListComponent} from './arena-list/arena-list.component';
import {ArenaItemComponent} from './arena-item/arena-item.component';
import {ArenaService} from './service/arena.service';

const ROUTES: Routes = [
  { path: '', redirectTo: 'arena-list', pathMatch: 'full' },
  { path: 'arena-list', component: ArenaListComponent }
];


@NgModule({
  declarations: [
    AppComponent, ArenaListComponent, ArenaItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [ArenaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
