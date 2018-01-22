import {Nickname} from './nickname';
import {FightingSchool} from './fighting-school';
import {Technique} from './technique';
import {Wife} from './wife';

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
    this.nickname = (obj && obj.nickname) || null;
    this.wife = (obj && obj.wife) || null;
    this.fightingschool = (obj && obj.fightingschool) || null;
    this.techniques = (obj && obj.techniques) || [];
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
