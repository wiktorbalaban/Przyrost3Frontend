import { Component, OnInit } from '@angular/core';
import { ArenaService } from '../../../service/arena.service';

@Component({
  selector: 'app-arena-add',
  templateUrl: './arena-add.component.html',
  styleUrls: ['./arena-add.component.css']
})
export class ArenaAddComponent implements OnInit {
  newArenaName: String;

  constructor(private arenaService: ArenaService) {}

  ngOnInit() {
    this.newArenaName = '';
  }

  createNewArena() {
    if (this.newArenaName !== '') {
      this.arenaService.createNew(this.newArenaName);
      this.newArenaName = '';
    } else {
      window.alert('brak nazwy areny');
    }
  }
}
