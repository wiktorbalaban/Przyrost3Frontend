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
import {ArenaSearchComponent} from './components/arena/arena-search/arena-search.component';
import {NicknameSearchComponent} from './components/nickname/nickname-search/nickname-search.component';
import {NicknameListPagedComponent} from './components/nickname/nickname-list-paged/nickname-list-paged.component';
import {WifeSearchComponent} from './components/wife/wife-search/wife-search.component';
import {WifeListPagedComponent} from './components/wife/wife-list-paged/wife-list-paged.component';
import {WifeListComponent} from './components/wife/wife-list/wife-list.component';
import {WifeAddComponent} from './components/wife/wife-add/wife-add.component';
import {WifeEditComponent} from './components/wife/wife-edit/wife-edit.component';
import {WifeItemComponent} from './components/wife/wife-item/wife-item.component';
import {WifeService} from './service/wife.service';
import {FightingSchool} from './models/fighting-school';
import {FightingSchoolEditComponent} from './components/fighting-school/fighting-school-edit/fighting-school-edit.component';
import {FightingSchoolAddComponent} from './components/fighting-school/fighting-school-add/fighting-school-add.component';
import {FightingSchoolListComponent} from './components/fighting-school/fighting-school-list/fighting-school-list.component';
import {FightingSchoolListPagedComponent} from './components/fighting-school/fighting-school-list-paged/fight-school-list-paged.component';
import {FightingSchoolSearchComponent} from './components/fighting-school/fighting-school-search/fighting-school-search.component';
import {FightingSchoolItemComponent} from './components/fighting-school/fighting-school-item/fighting-school-item.component';
import {FightingSchoolService} from './service/fighting-school.service';
import {TechniqueEditComponent} from './components/technique/technique-edit/technique-edit.component';
import {TechniqueAddComponent} from './components/technique/technique-add/technique-add.component';
import {TechniqueListComponent} from './components/technique/technique-list/technique-list.component';
import {TechniqueListPagedComponent} from './components/technique/technique-paged/technique-list-paged.component';
import {TechniqueSearchComponent} from './components/technique/technique-search/technique-search.component';
import {TechniqueItemComponent} from './components/technique/technique-item/technique-item.component';
import {TechniqueService} from './service/technique.service';
import {WarriorService} from './service/warrior.service';
import {WarriorItemComponent} from './components/warrior/warrior-item/warrior-item.component';
import {WarriorListComponent} from './components/warrior/warrior-list/warrior-list.component';
import {WarriorEditComponent} from './components/warrior/warrior-edit/warrior-edit.component';

const ROUTES: Routes = [
  // { path: '', redirectTo: 'nickname-list', pathMatch: 'full' },
  {path: 'arena-list', component: ArenaListComponent},
  {path: 'arena-search', component: ArenaSearchComponent},
  {path: 'arena-list-paged', component: ArenaListPagedComponent},
  {path: 'arena-add', component: ArenaAddComponent},
  {path: 'arena-edit/:id', component: ArenaEditComponent},
  {path: 'nickname-search', component: NicknameSearchComponent},
  {path: 'nickname-list-paged', component: NicknameListPagedComponent},
  {path: 'nickname-list', component: NicknameListComponent},
  {path: 'nickname-add', component: NicknameAddComponent},
  {path: 'nickname-edit/:id', component: NicknameEditComponent},
  {path: 'wife-search', component: WifeSearchComponent},
  {path: 'wife-list-paged', component: WifeListPagedComponent},
  {path: 'wife-list', component: WifeListComponent},
  {path: 'wife-add', component: WifeAddComponent},
  {path: 'wife-edit/:id', component: WifeEditComponent},
  {path: 'fighting-school-search', component: FightingSchoolSearchComponent},
  {path: 'fighting-school-list-paged', component: FightingSchoolListPagedComponent},
  {path: 'fighting-school-list', component: FightingSchoolListComponent},
  {path: 'fighting-school-add', component: FightingSchoolAddComponent},
  {path: 'fighting-school-edit/:id', component: FightingSchoolEditComponent},
  {path: 'technique-search', component: TechniqueSearchComponent},
  {path: 'technique-list-paged', component: TechniqueListPagedComponent},
  {path: 'technique-list', component: TechniqueListComponent},
  {path: 'technique-add', component: TechniqueAddComponent},
  {path: 'technique-edit/:id', component: TechniqueEditComponent},
  {path: 'warrior-list', component: WarriorListComponent},
  {path: 'warrior-edit/:id', component: WarriorEditComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ArenaListComponent, ArenaItemComponent, ArenaAddComponent, ArenaEditComponent, ArenaListPagedComponent, ArenaSearchComponent,
    NicknameItemComponent, NicknameListComponent, NicknameEditComponent, NicknameAddComponent, NicknameListPagedComponent,
    NicknameSearchComponent,
    WifeItemComponent, WifeListComponent, WifeEditComponent, WifeAddComponent, WifeListPagedComponent, WifeSearchComponent,
    FightingSchoolItemComponent, FightingSchoolListComponent, FightingSchoolEditComponent, FightingSchoolAddComponent,
    FightingSchoolListPagedComponent, FightingSchoolSearchComponent,
    TechniqueItemComponent, TechniqueListComponent, TechniqueEditComponent, TechniqueAddComponent,
    TechniqueListPagedComponent, TechniqueSearchComponent,
    WarriorItemComponent, WarriorListComponent, WarriorEditComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [ArenaService, NicknameService, WifeService, FightingSchoolService, TechniqueService, WarriorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
