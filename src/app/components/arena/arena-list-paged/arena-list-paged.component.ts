import {Component, OnInit} from '@angular/core';
import {ArenaService} from '../../../service/arena.service';
import {Arena} from '../../../models/arena';

@Component({
  selector: 'app-arena-list-paged',
  templateUrl: './arena-list-paged.component.html',
  styleUrls: ['./arena-list-paged.component.css']
})
export class ArenaListPagedComponent implements OnInit {
  arenasPaged: Arena[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private servicePaged: ArenaService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getArenasPaged();
  }

  private getArenasPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.servicePaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.arenasPaged = res.content.map(el => new Arena(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeArenaPaged(id: number) {
    this.arenasPaged = this.arenasPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove arena');
  }

}
