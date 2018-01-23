import {Component, OnInit} from '@angular/core';
import {WarriorService} from '../../../service/warrior.service';
import {Warrior} from '../../../models/warrior';

@Component({
  selector: 'app-warrior-search',
  templateUrl: './warrior-search.component.html',
  styleUrls: ['./warrior-search.component.css']
})
export class WarriorSearchComponent implements OnInit {
  searchPhrase: String;
  searchedWarriors: Warrior[];

  constructor(private warriorSearchService: WarriorService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchWarrior() {
    if (this.searchPhrase !== '') {
      this.warriorSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedWarriors = res.map(el => new Warrior(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedWarrior(id: number) {
    this.searchedWarriors = this.searchedWarriors.filter(el => el.getId() !== id);
    console.log(id, 'remove warrior');
  }
}
