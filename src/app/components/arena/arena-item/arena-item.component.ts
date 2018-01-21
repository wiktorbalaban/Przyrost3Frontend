import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Arena} from '../../../models/arena';
import {ArenaService} from '../../../service/arena.service';

@Component({
  selector: 'app-arena-item',
  templateUrl: './arena-item.component.html',
  styleUrls: ['./arena-item.component.css']
})
export class ArenaItemComponent implements OnInit {
  @Input() arena: Arena;
  @Output() removeItem: EventEmitter<number> = new EventEmitter();

  constructor(private arenaService: ArenaService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeItem.emit(id);
  }

  deleteArena(id: number) {
    this.arenaService.delete(id);
    this.remove(id);
    console.log('deleteArena');
  }
}
