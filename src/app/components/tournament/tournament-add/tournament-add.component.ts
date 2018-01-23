import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../../../service/tournament.service';
import {Tournament} from '../../../models/tournament';
import {Nickname} from '../../../models/nickname';
import {Wife} from '../../../models/wife';
import {Arena} from '../../../models/arena';

@Component({
  selector: 'app-tournament-add',
  templateUrl: './tournament-add.component.html',
  styleUrls: ['./tournament-add.component.css']
})
export class TournamentAddComponent implements OnInit {
  newTournamentName: String;
  newTournamentDate: Date;

  newTournament: Tournament;

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit() {
    this.newTournamentName = '';
    this.newTournamentDate = undefined;
    this.newTournament = new Tournament();
  }

  createNewTournament() {
    if (this.newTournamentName !== '') {
      this.newTournament.setName(this.newTournamentName);
      this.newTournament.setDate(this.newTournamentDate);

      this.newTournament.setArena(null);

      this.newTournament.setParticipants([]);

      this.tournamentService.createNew(this.newTournament);

      this.newTournamentName = '';
      this.newTournamentDate = undefined;
    } else {
      window.alert('brak nazwy tournament');
    }
  }
}
