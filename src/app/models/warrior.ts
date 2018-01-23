import {Nickname} from './nickname';
import {FightingSchool} from './fighting-school';
import {Technique} from './technique';
import {Wife} from './wife';
import {forEach} from '@angular/router/src/utils/collection';

export class Warrior {
  private id: number;
  private name: String;
  private surname: String;
  private power: number;
  private nickname: Nickname;
  private wife: Wife;
  private fightingschool: FightingSchool;
  private techniques: Array<Technique>;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.name = (obj && obj.name) || '';
    this.surname = (obj && obj.surname) || '';
    this.power = (obj && obj.power) || 0;
    this.nickname = new Nickname(obj && obj.nickname) || null;
    this.wife = new Wife(obj && obj.wife) || null;
    if ((obj && obj.fightingschool) != null) {
      this.fightingschool = new FightingSchool(obj && obj.fightingschool);
    } else {
      this.fightingschool = null;
    }
    // console.log('this.fightingschool ' + this.fightingschool);
    // console.log('(obj && obj.fightingschool) ' + (obj && obj.fightingschool));
    // console.log('new FightingSchool(obj && obj.fightingschool) ' + new FightingSchool(obj && obj.fightingschool));
    // console.log('(obj && obj.techniques).map(el => new Technique(el) ' + (obj && obj.techniques).map(el => new Technique(el)));
    console.log('(obj && obj.techniques) ' + (obj && obj.techniques));
    if ((obj && obj.techniques) !== undefined && (obj && obj.techniques) !== null) {
      this.techniques = (obj && obj.techniques).map(el => new Technique(el));
    } else {
      this.techniques = null;
    }
    // console.log('Warrior class this.techniqueslength ' + this.techniques.length);
    // console.log('Warrior class this.techniques[0].getId()' + this.techniques[0].getId());
  }

  getId(): number {
    return this.id;
  }

  getPower(): number {
    return this.power;
  }

  getName(): String {
    return this.name;
  }

  getSurname(): String {
    return this.surname;
  }

  getNickname(): Nickname {
    return this.nickname;
  }

  getWife(): Wife {
    return this.wife;
  }

  getFightingSchool(): FightingSchool {
    return this.fightingschool;
  }

  getTechniques(): Array<Technique> {
    return this.techniques;
  }

  setId(id: number) {
    this.id = id;
  }

  setPower(power: number) {
    this.power = power;
  }

  setName(name: String) {
    this.name = name;
  }

  setSurname(surname: String) {
    this.surname = surname;
  }

  setNickname(nickname: Nickname) {
    this.nickname = nickname;
  }

  setWife(wife: Wife) {
    this.wife = wife;
  }

  setFightingSchool(fightingschool: FightingSchool) {
    this.fightingschool = fightingschool;
  }

  setTechniques(techniques: Array<Technique>) {
    this.techniques = techniques;
  }

}
