import {Component, OnInit} from '@angular/core';
import {WarriorService} from '../../../service/warrior.service';
import {Warrior} from '../../../models/warrior';
import {Nickname} from '../../../models/nickname';
import {Wife} from '../../../models/wife';

@Component({
  selector: 'app-warrior-add',
  templateUrl: './warrior-add.component.html',
  styleUrls: ['./warrior-add.component.css']
})
export class WarriorAddComponent implements OnInit {
  newWarriorName: String;
  newWarriorSurname: String;
  newWarriorPower: number;
  newWarriorNicknameName: String;
  newWarriorWifeName: String;
  newWarriorWifeSurname: String;
  newWarriorWifePercentagetopower: number;

  newWarrior: Warrior;

  constructor(private warriorService: WarriorService) {
  }

  ngOnInit() {
    this.newWarriorName = '';
    this.newWarriorSurname = '';
    this.newWarriorNicknameName = '';
    this.newWarriorWifeName = '';
    this.newWarriorWifeSurname = '';
    this.newWarrior = new Warrior();
  }

  createNewWarrior() {
    if (this.newWarriorName !== '') {
      this.newWarrior.setName(this.newWarriorName);
      this.newWarrior.setSurname(this.newWarriorSurname);
      this.newWarrior.setPower(this.newWarriorPower);

      let tmpNick: Nickname;
      tmpNick = new Nickname();
      tmpNick.setName(this.newWarriorNicknameName);
      this.newWarrior.setNickname(tmpNick);

      let tmpWife: Wife;
      tmpWife = new Wife();
      tmpWife.setName(this.newWarriorWifeName);
      tmpWife.setSurname(this.newWarriorWifeSurname);
      tmpWife.setPercentagetopower(this.newWarriorWifePercentagetopower);
      this.newWarrior.setWife(tmpWife);

      this.newWarrior.setFightingSchool(null);
      this.newWarrior.setTechniques([]);

      this.warriorService.createNew(this.newWarrior);

      this.newWarriorName = '';
      this.newWarriorSurname = '';
      this.newWarriorPower = undefined;
      this.newWarriorNicknameName = '';
      this.newWarriorWifeName = '';
      this.newWarriorWifeSurname = '';
      this.newWarriorWifePercentagetopower = undefined;
    } else {
      window.alert('brak nazwy warrior');
    }
  }
}
