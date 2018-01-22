import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Warrior} from '../../../models/warrior';
import {WarriorService} from '../../../service/warrior.service';

@Component({
  selector: 'app-warrior-item',
  templateUrl: './warrior-item.component.html',
  styleUrls: ['./warrior-item.component.css']
})
export class WarriorItemComponent implements OnInit {
  @Input() warrior: Warrior;
  @Output() removeWarrior: EventEmitter<number> = new EventEmitter();

  constructor(private warriorService: WarriorService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeWarrior.emit(id);
  }

  deleteWarrior(id: number) {
    this.warriorService.delete(id);
    this.remove(id);
    console.log('deleteWarrior');
  }
}
