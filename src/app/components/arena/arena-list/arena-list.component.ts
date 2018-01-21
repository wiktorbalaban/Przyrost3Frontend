import {Component, OnInit} from '@angular/core';
import {ArenaService} from '../../../service/arena.service';
import {Arena} from '../../../models/arena';

@Component({
  selector: 'app-arena-list',
  templateUrl: './arena-list.component.html',
  styleUrls: ['./arena-list.component.css']
})
export class ArenaListComponent implements OnInit {
  arenas: Arena[];

  constructor(private service: ArenaService) {
  }

  ngOnInit() {
    this.getArenas();
  }

  private getArenas() {
    this.service.getAll().subscribe(res => {
      this.arenas = res.map(el => new Arena(el));
    });
  }

  public removeArena(id: number) {
    this.arenas = this.arenas.filter(el => el.getId() !== id);
    console.log(id, 'remove arena');
  }

}
