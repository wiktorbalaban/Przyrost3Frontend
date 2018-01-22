import {Component, OnInit} from '@angular/core';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {FightingSchool} from '../../../models/fighting-school';

@Component({
  selector: 'app-fighting-school-list',
  templateUrl: './fighting-school-list.component.html',
  styleUrls: ['./fighting-school-list.component.css']
})
export class FightingSchoolListComponent implements OnInit {
  fightingSchools: FightingSchool[];

  constructor(private fightingSchoolService: FightingSchoolService) {
  }

  ngOnInit() {
    this.getWives();
  }

  private getWives() {
    this.fightingSchoolService.getAll().subscribe(res => {
      this.fightingSchools = res.map(el => new FightingSchool(el));
    });
  }

  public removeFightingSchool(id: number) {
    this.fightingSchools = this.fightingSchools.filter(el => el.getId() !== id);
    console.log(id, 'remove fightingSchool');
  }

}
