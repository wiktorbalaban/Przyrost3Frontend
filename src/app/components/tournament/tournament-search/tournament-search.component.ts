import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../../../service/tournament.service';
import {Tournament} from '../../../models/tournament';

@Component({
  selector: 'app-tournament-search',
  templateUrl: './tournament-search.component.html',
  styleUrls: ['./tournament-search.component.css']
})
export class TournamentSearchComponent implements OnInit {
  searchPhrase: String;
  searchedTournaments: Tournament[];

  constructor(private tournamentSearchService: TournamentService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchTournament() {
    if (this.searchPhrase !== '') {
      this.tournamentSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedTournaments = res.map(el => new Tournament(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedTournament(id: number) {
    this.searchedTournaments = this.searchedTournaments.filter(el => el.getId() !== id);
    console.log(id, 'remove tournament');
  }
}
