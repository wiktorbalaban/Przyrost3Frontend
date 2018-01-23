import {Component, OnInit} from '@angular/core';
import {WarriorService} from '../../../service/warrior.service';
import {ActivatedRoute} from '@angular/router';
import {Warrior} from '../../../models/warrior';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Nickname} from '../../../models/nickname';
import {Wife} from '../../../models/wife';
import {FightingSchool} from '../../../models/fighting-school';
import {Technique} from '../../../models/technique';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {TechniqueService} from '../../../service/technique.service';

@Component({
  selector: 'app-warrior-edit',
  templateUrl: './warrior-edit.component.html',
  styleUrls: ['./warrior-edit.component.css']
})
export class WarriorEditComponent implements OnInit {

  id: number;
  private sub: any;
  warriorToEdit: Warrior;
  updateWarrior: Warrior;
  updateWarriorName: String;
  updateWarriorSurname: String;
  updateWarriorPower: number;
  updateWarriorNickname: Nickname;
  updateWarriorWife: Wife;
  updateWarriorFightingschool: FightingSchool;
  updateWarriorTechniques: Array<Technique>;

  fsToChoose: Array<FightingSchool>;
  teToChoose: Array<Technique>;
  teToChooseFlag: Array<boolean>;
  areTeEditing: boolean;

  constructor(private warriorService: WarriorService, private route: ActivatedRoute,
              private fightingSchoolService: FightingSchoolService, private techniqueService: TechniqueService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.warriorService.getById(this.id).subscribe(
      res => {
        this.warriorToEdit = new Warrior(res);
        // if (this.warriorToEdit.getFightingSchool() != null) {
        //   console.log('this.warriorToEdit.getFightingSchool() != null');
        // } else {
        //   console.log('this.warriorToEdit.getFightingSchool() == null');
        // }
      }
    );
    this.getFightingSchools();
    this.areTeEditing = false;
  }

  editWarrior() {
    if (this.updateWarriorName !== undefined && this.updateWarriorSurname !== undefined && this.updateWarriorPower !== undefined) {
      this.updateWarrior = new Warrior(null);
      this.updateWarrior.setId(this.warriorToEdit.getId());
      this.updateWarrior.setName(this.updateWarriorName);
      this.updateWarrior.setSurname(this.updateWarriorSurname);
      this.updateWarrior.setPower(this.updateWarriorPower);
      this.updateWarrior.setNickname(this.warriorToEdit.getNickname());
      this.updateWarrior.setWife(this.warriorToEdit.getWife());
      this.updateWarrior.setFightingSchool(this.warriorToEdit.getFightingSchool());
      this.updateWarrior.setTechniques(this.warriorToEdit.getTechniques());
      this.warriorService.edit(this.updateWarrior);
      console.log('updateWarrior ' + this.updateWarrior);
    } else {
      window.alert('Nazwa warrior  jest błędna');
    }
  }

  private getFightingSchools() {
    this.fightingSchoolService.getAll().subscribe(res => {
      this.fsToChoose = res.map(el => new FightingSchool(el));
    });
  }

  private getTechniques() {
    this.techniqueService.getAll().subscribe(res => {
      this.teToChoose = res.map(el => new Technique(el));
    });
  }

  chooseFightingSchool(fightingSchool: FightingSchool) {
    this.warriorToEdit.setFightingSchool(fightingSchool);
  }

  chooseAnotherFightingSchool() {
    this.warriorToEdit.setFightingSchool(null);
  }

  editTechniques() {
    this.getTechniques();
    this.teToChooseFlag = [];
    if (this.teToChoose !== undefined) {
      if (this.teToChoose.length > 0) {
        for (const index in this.teToChoose) {
          // console.log('t ' + t);
          if (this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
            this.teToChooseFlag[index] = false;
          } else {
            this.teToChooseFlag[index] = true;
          }
        }
        this.areTeEditing = true;
      } else {
        window.alert('nie ma technik');
      }
    } else {
      window.alert('kliknij jeszcze raz :)');
    }
  }

  switchTeToChooseFlag(index: number) {
    if (index < this.teToChooseFlag.length) {
      this.teToChooseFlag[index] = !this.teToChooseFlag[index];
    }
  }

  confirmTechniques() {
    let tmp: Array<Technique>;
    tmp = [];
    for (const index in this.teToChoose) {
      if (this.teToChooseFlag[index]) {
        tmp.push(this.teToChoose[index]);
      }
    }
    this.warriorToEdit.setTechniques(tmp);
    this.areTeEditing = false;
  }

}
