import {Component, OnInit} from '@angular/core';
import {NicknameService} from '../../../service/nickname.service';
import {Nickname} from '../../../models/nickname';

@Component({
  selector: 'app-nickname-search',
  templateUrl: './nickname-search.component.html',
  styleUrls: ['./nickname-search.component.css']
})
export class NicknameSearchComponent implements OnInit {
  searchPhrase: String;
  searchedNicknames: Nickname[];

  constructor(private nicknameSearchService: NicknameService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchNickname() {
    if (this.searchPhrase !== '') {
      this.nicknameSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedNicknames = res.map(el => new Nickname(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedNickname(id: number) {
    this.searchedNicknames = this.searchedNicknames.filter(el => el.getId() !== id);
    console.log(id, 'remove nickname');
  }
}
