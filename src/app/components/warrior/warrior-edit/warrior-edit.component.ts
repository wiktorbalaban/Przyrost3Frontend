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

  constructor(private warriorService: WarriorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.warriorService.getById(this.id).subscribe(
      res => {
        this.warriorToEdit = new Warrior(res);
        console.log('update res: ' + res);
        console.log('this.warriorToEdit: ' + this.warriorToEdit);
        console.log('this.warriorToEdit.getNickname(): ' + this.warriorToEdit.getNickname());
        console.log('this.warriorToEdit.getNickname().getId(): ' + this.warriorToEdit.getNickname().getId());
        console.log('this.warriorToEdit.getNickname().getName(): ' + this.warriorToEdit.getNickname().getName());
      }
    );
  }

  editWarrior() {
    if (this.updateWarriorName !== undefined && this.updateWarriorSurname !== undefined && this.updateWarriorPower !== undefined
      && this.updateWarriorNickname && this.updateWarriorWife && this.updateWarriorFightingschool && this.updateWarriorTechniques) {
      this.updateWarrior = new Warrior();
      this.updateWarrior.setId(this.warriorToEdit.getId());
      this.updateWarrior.setName(this.updateWarriorName);
      this.updateWarrior.setSurname(this.updateWarriorSurname);
      this.updateWarrior.setPower(this.updateWarriorPower);
      this.updateWarrior.setNickname(this.warriorToEdit.getNickname());
      this.updateWarrior.setWife(this.warriorToEdit.getWife());
      this.updateWarrior.setFightingSchool(this.warriorToEdit.getFightingSchool());
      this.updateWarrior.setTechniques(this.warriorToEdit.getTechniques());
      // this.warriorService.edit(this.updateWarrior);
      console.log('updateWarriorName: ' + this.updateWarriorName);
    } else {
      window.alert('Nazwa warrior  jest błędna');
    }
  }

}
