import {Component, OnInit} from '@angular/core';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {FightingSchool} from '../../../models/fighting-school';

@Component({
  selector: 'app-fighting-school-search',
  templateUrl: './fighting-school-search.component.html',
  styleUrls: ['./fighting-school-search.component.css']
})
export class FightingSchoolSearchComponent implements OnInit {
  searchPhrase: String;
  searchedFightingSchools: FightingSchool[];

  constructor(private fightingSchoolSearchService: FightingSchoolService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchFightingSchool() {
    if (this.searchPhrase !== '') {
      this.fightingSchoolSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedFightingSchools = res.map(el => new FightingSchool(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedFightingSchool(id: number) {
    this.searchedFightingSchools = this.searchedFightingSchools.filter(el => el.getId() !== id);
    console.log(id, 'remove fightingSchool');
  }
}
