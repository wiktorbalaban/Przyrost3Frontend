import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FightingSchool} from '../../../models/fighting-school';
import {FightingSchoolService} from '../../../service/fighting-school.service';

@Component({
  selector: 'app-fighting-school-item',
  templateUrl: './fighting-school-item.component.html',
  styleUrls: ['./fighting-school-item.component.css']
})
export class FightingSchoolItemComponent implements OnInit {
  @Input() fightingSchool: FightingSchool;
  @Output() removeFightingSchool: EventEmitter<number> = new EventEmitter();

  constructor(private fightingSchoolService: FightingSchoolService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeFightingSchool.emit(id);
  }

  deleteFightingSchool(id: number) {
    this.fightingSchoolService.delete(id);
    this.remove(id);
    console.log('deleteFightingSchool');
  }
}
