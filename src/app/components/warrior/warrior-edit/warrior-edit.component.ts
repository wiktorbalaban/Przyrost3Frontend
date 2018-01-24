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
  isEditingPaged: boolean;

  page: number;
  size: number;
  totalPages: number;

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
    this.page = 1;
    this.size = 10;
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

  private getTechniquesPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.techniqueService.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.teToChoose = res.content.map(el => new Technique(el));
          console.log('this.teToChoose[0].getName() ' + this.teToChoose[0].getName());
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  chooseFightingSchool(fightingSchool: FightingSchool) {
    this.warriorToEdit.setFightingSchool(fightingSchool);
  }

  chooseAnotherFightingSchool() {
    this.warriorToEdit.setFightingSchool(null);
  }

  editTechniques() {
    this.isEditingPaged = false;
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

  editTechniquesPaged() {
    this.isEditingPaged = true;

    if (this.teToChoose !== undefined && this.teToChoose.length > 0
      && this.teToChooseFlag !== undefined && this.teToChooseFlag.length > 0) {
      console.log('confirm');
      for (const index in this.teToChoose) {
        if (this.teToChooseFlag[index] === true) {
          if (this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
            this.warriorToEdit.getTechniques().push(this.teToChoose[index]);
          } else {
            // this.warriorToEdit.getTechniques().filter( obj => obj.getId() !== this.teToChoose[index].getId());
          }
        } else {
          if (this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
            // this.warriorToEdit.getTechniques().push(this.teToChoose[index]);
          } else {
            // this.warriorToEdit.getTechniques().filter(obj => obj.getId() !== this.teToChoose[index].getId());
            // console.log('this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId())..getId() ' +
            //   this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()).getId());
            const idToRemove = this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()).getId();
            let i: number;
            i = 0;
            for (const index2 in this.teToChoose) {
              if (this.warriorToEdit.getTechniques()[index2].getId() === idToRemove) {
                // console.log('indexRoremove ' + i);
                // console.log('this.warriorToEdit.getTechniques()[i].getId() ' + this.warriorToEdit.getTechniques()[i].getId());
                this.warriorToEdit.setTechniques(this.warriorToEdit.getTechniques().slice(i + 1, 1));
                // console.log('this.warriorToEdit.getTechniques()[i].getId() ' + this.warriorToEdit.getTechniques()[i].getId());
                break;
              }
              i++;
            }
          }
        }
      }
    }

    this.getTechniquesPaged();

    console.log('this.teToChoose' + this.teToChoose);
    if (this.teToChoose !== undefined) {
      if (this.teToChoose.length > 0) {
        console.log('get paged');
        this.teToChooseFlag = [];
        for (const index in this.teToChoose) {
          // console.log('t ' + t);
          if (this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
            this.teToChooseFlag[index] = false;
          } else {
            this.teToChooseFlag[index] = true;
          }
        }
        console.log('this.teToChooseFlag[0] ' + this.teToChooseFlag[0]);
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

  stopEditPaged() {
    this.areTeEditing = false;
  }

}
