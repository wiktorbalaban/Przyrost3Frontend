import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Tournament} from '../../../models/tournament';
import {TournamentService} from '../../../service/tournament.service';
import {Warrior} from '../../../models/warrior';

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.css']
})
export class TournamentItemComponent implements OnInit {
  @Input() tournament: Tournament;
  @Output() removeTournament: EventEmitter<number> = new EventEmitter();
  winner: Warrior;
  isWinnerShown: boolean;

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit() {
    this.isWinnerShown = false;
  }

  remove(id: number) {
    this.removeTournament.emit(id);
  }

  deleteTournament(id: number) {
    this.tournamentService.delete(id);
    this.remove(id);
    console.log('deleteTournament');
  }

  private getWinner() {
    this.tournamentService.getWinner(this.tournament.getId()).subscribe(res => {
      // console.log('res');
      // console.log(res);
      this.winner = new Warrior(res);
      // console.log('this.winner.getName() ' + this.winner.getName());
    });
  }

  showWinner() {
    this.getWinner();
    setTimeout(() => {
        this.isWinnerShown = true;
      },
      100);
  }

  hideWinner() {
    this.isWinnerShown = false;
    this.winner = null;
  }

}
