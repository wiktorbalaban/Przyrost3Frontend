import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Tournament} from '../../../models/tournament';
import {TournamentService} from '../../../service/tournament.service';

@Component({
  selector: 'app-tournament-item',
  templateUrl: './tournament-item.component.html',
  styleUrls: ['./tournament-item.component.css']
})
export class TournamentItemComponent implements OnInit {
  @Input() tournament: Tournament;
  @Output() removeTournament: EventEmitter<number> = new EventEmitter();

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeTournament.emit(id);
  }

  deleteTournament(id: number) {
    this.tournamentService.delete(id);
    this.remove(id);
    console.log('deleteTournament');
  }
}
