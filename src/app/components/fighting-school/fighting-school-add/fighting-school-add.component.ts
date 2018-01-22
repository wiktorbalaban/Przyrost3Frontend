import {Component, OnInit} from '@angular/core';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {FightingSchool} from '../../../models/fighting-school';

@Component({
  selector: 'app-fighting-school-add',
  templateUrl: './fighting-school-add.component.html',
  styleUrls: ['./fighting-school-add.component.css']
})
export class FightingSchoolAddComponent implements OnInit {
  newFightingSchoolName: String;
  newFightingSchoolPercentagetopower: number;
  newFightingSchool: FightingSchool;

  constructor(private fightingSchoolService: FightingSchoolService) {
  }

  ngOnInit() {
    this.newFightingSchoolName = '';
    this.newFightingSchool = new FightingSchool();
  }

  createNewFightingSchool() {
    if (this.newFightingSchoolName !== '') {
      this.newFightingSchool.setName(this.newFightingSchoolName);
      this.newFightingSchool.setPercentagetopower(this.newFightingSchoolPercentagetopower);
      this.fightingSchoolService.createNew(this.newFightingSchool);
      this.newFightingSchoolName = '';
      this.newFightingSchoolPercentagetopower = undefined;
    } else {
      window.alert('brak nazwy FightingSchool');
    }
  }
}
