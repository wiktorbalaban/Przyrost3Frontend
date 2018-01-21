import {Component, OnInit} from '@angular/core';
import {WifeService} from '../../../service/wife.service';
import {Wife} from '../../../models/wife';

@Component({
  selector: 'app-wife-search',
  templateUrl: './wife-search.component.html',
  styleUrls: ['./wife-search.component.css']
})
export class WifeSearchComponent implements OnInit {
  searchPhrase: String;
  searchedWives: Wife[];

  constructor(private wifeSearchService: WifeService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchWife() {
    if (this.searchPhrase !== '') {
      this.wifeSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedWives = res.map(el => new Wife(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedWife(id: number) {
    this.searchedWives = this.searchedWives.filter(el => el.getId() !== id);
    console.log(id, 'remove wife');
  }
}
