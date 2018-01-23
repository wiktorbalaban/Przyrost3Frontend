import {Technique} from './technique';
import {Arena} from './arena';
import {Warrior} from './warrior';

export class Tournament {
  private id: number;
  private name: String;
  private arena: Arena;
  private participants: Array<Warrior>;
  private date: Date;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.name = (obj && obj.name) || '';
    this.date = (obj && obj.date) || '';
    this.arena = new Arena(obj && obj.arena) || null;
    if ((obj && obj.participants) !== undefined && (obj && obj.participants) !== null) {
      this.participants = (obj && obj.participants).map(el => new Technique(el));
    } else {
      this.participants = null;
    }
    // console.log('Warrior class this.techniqueslength ' + this.techniques.length);
  }

  getId(): number {
    return this.id;
  }

  getName(): String {
    return this.name;
  }

  getArena(): Arena {
    return this.arena;
  }

  getDate(): Date {
    return this.date;
  }

  getParticipants(): Array<Warrior> {
    return this.participants;
  }

  setId(id: number) {
    this.id = id;
  }

  setName(name: String) {
    this.name = name;
  }

  setArena(arena: Arena) {
    this.arena = arena;
  }

  setDate(date: Date) {
    this.date = date;
  }

  setParticipants(participants: Array<Warrior>) {
    this.participants = participants;
  }

}
