import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../../../service/tournament.service';
import {Tournament} from '../../../models/tournament';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  tournaments: Tournament[];

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit() {
    this.getTournaments();
  }

  private getTournaments() {
    this.tournamentService.getAll().subscribe(res => {
      this.tournaments = res.map(el => new Tournament(el));
    });
  }

  public removeTournament(id: number) {
    this.tournaments = this.tournaments.filter(el => el.getId() !== id);
    console.log(id, 'remove tournament');
  }

}
