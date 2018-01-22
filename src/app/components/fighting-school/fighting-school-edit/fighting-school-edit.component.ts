import {Component, OnInit} from '@angular/core';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {ActivatedRoute} from '@angular/router';
import {FightingSchool} from '../../../models/fighting-school';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-fighting-school-edit',
  templateUrl: './fighting-school-edit.component.html',
  styleUrls: ['./fighting-school-edit.component.css']
})
export class FightingSchoolEditComponent implements OnInit {

  id: number;
  private sub: any;
  fightingSchoolToEdit: FightingSchool;
  updateFightingSchool: FightingSchool;
  updateFightingSchoolName: String;
  updateFightingSchoolPercentagetopower: number;

  constructor(private fightingSchoolService: FightingSchoolService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.fightingSchoolService.getById(this.id).subscribe(
      res => {
        this.fightingSchoolToEdit = new FightingSchool(res);
      }
    );
  }

  editFightingSchool() {
    if (this.updateFightingSchoolName !== undefined && this.updateFightingSchoolPercentagetopower !== undefined) {
      this.updateFightingSchool = new FightingSchool();
      this.updateFightingSchool.setId(this.fightingSchoolToEdit.getId());
      this.updateFightingSchool.setName(this.updateFightingSchoolName);
      this.updateFightingSchool.setPercentagetopower(this.updateFightingSchoolPercentagetopower);
      this.fightingSchoolService.edit(this.updateFightingSchool);
      console.log('updateFightingSchoolName: ' + this.updateFightingSchoolName);
    } else {
      window.alert('Nazwa fightingSchool  jest błędna');
    }
  }

}
