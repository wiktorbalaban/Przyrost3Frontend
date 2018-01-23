import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../../../service/tournament.service';
import {Tournament} from '../../../models/tournament';

@Component({
  selector: 'app-tournament-list-paged',
  templateUrl: './tournament-list-paged.component.html',
  styleUrls: ['./tournament-list-paged.component.css']
})
export class TournamentListPagedComponent implements OnInit {
  tournamentsPaged: Tournament[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private tournamentServicePaged: TournamentService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getTournamentsPaged();
  }

  private getTournamentsPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.tournamentServicePaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.tournamentsPaged = res.content.map(el => new Tournament(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeTournamentPaged(id: number) {
    this.tournamentsPaged = this.tournamentsPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove tournament');
  }

}
