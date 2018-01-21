import {Component, OnInit} from '@angular/core';
import {ArenaService} from '../../../service/arena.service';
import {Arena} from '../../../models/arena';

@Component({
  selector: 'app-arena-search',
  templateUrl: './arena-search.component.html',
  styleUrls: ['./arena-search.component.css']
})
export class ArenaSearchComponent implements OnInit {
  searchPhrase: String;
  searchedArenas: Arena[];

  constructor(private arenaSearchService: ArenaService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchArena() {
    if (this.searchPhrase !== '') {
      this.arenaSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedArenas = res.map(el => new Arena(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedArena(id: number) {
    this.searchedArenas = this.searchedArenas.filter(el => el.getId() !== id);
    console.log(id, 'remove arena');
  }
}
