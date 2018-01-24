import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../../../service/tournament.service';
import {ActivatedRoute} from '@angular/router';
import {Tournament} from '../../../models/tournament';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Nickname} from '../../../models/nickname';
import {Wife} from '../../../models/wife';
import {FightingSchool} from '../../../models/fighting-school';
import {Technique} from '../../../models/technique';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {TechniqueService} from '../../../service/technique.service';
import {Arena} from '../../../models/arena';
import {Warrior} from '../../../models/warrior';
import {WarriorService} from '../../../service/warrior.service';
import {ArenaService} from '../../../service/arena.service';

@Component({
  selector: 'app-tournament-edit',
  templateUrl: './tournament-edit.component.html',
  styleUrls: ['./tournament-edit.component.css']
})
export class TournamentEditComponent implements OnInit {

  id: number;
  private sub: any;
  tournamentToEdit: Tournament;
  updateTournament: Tournament;
  updateTournamentName: String;
  updateTournamentDate: Date;
  updateTournamentArena: Arena;
  updateTournamentParticipants: Array<Warrior>;

  aToChoose: Array<Arena>;
  teToChoose: Array<Warrior>;
  teToChooseFlag: Array<boolean>;
  areTeEditing: boolean;

  constructor(private tournamentService: TournamentService, private route: ActivatedRoute,
              private participantsService: WarriorService, private arenaService: ArenaService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.tournamentService.getById(this.id).subscribe(
      res => {
        this.tournamentToEdit = new Tournament(res);
        // if (this.tournamentToEdit.getFightingSchool() != null) {
        //   console.log('this.tournamentToEdit.getFightingSchool() != null');
        // } else {
        //   console.log('this.tournamentToEdit.getFightingSchool() == null');
        // }
      }
    );
    this.getArenas();
    this.areTeEditing = false;
  }

  editTournament() {
    if (this.updateTournamentName !== undefined) {
      this.updateTournament = new Tournament(null);
      this.updateTournament.setId(this.tournamentToEdit.getId());
      this.updateTournament.setName(this.updateTournamentName);
      this.updateTournament.setDate(this.updateTournamentDate);
      this.updateTournament.setArena(this.tournamentToEdit.getArena());
      this.updateTournament.setParticipants(this.tournamentToEdit.getParticipants());
      this.tournamentService.edit(this.updateTournament);
      console.log('updateTournament ' + this.updateTournament);
    } else {
      window.alert('Nazwa tournament  jest błędna');
    }
  }

  private getParticipants() {
    this.participantsService.getAll().subscribe(res => {
      this.teToChoose = res.map(el => new Technique(el));
    });
  }

  private getArenas() {
    this.arenaService.getAll().subscribe(res => {
      this.aToChoose = res.map(el => new Arena(el));
    });
  }

  editParticipants() {
    this.getParticipants();
    this.teToChooseFlag = [];
    if (this.teToChoose !== undefined) {
      if (this.teToChoose.length > 0) {
        for (const index in this.teToChoose) {
          // console.log('t ' + t);
          if (this.tournamentToEdit.getParticipants().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
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

  confirmParticipants() {
    let tmp: Array<Warrior>;
    tmp = [];
    for (const index in this.teToChoose) {
      if (this.teToChooseFlag[index]) {
        tmp.push(this.teToChoose[index]);
      }
    }
    this.tournamentToEdit.setParticipants(tmp);
    this.areTeEditing = false;
  }

  chooseArena(arena: Arena) {
    this.tournamentToEdit.setArena(arena);
  }

  chooseAnotherArena() {
    this.tournamentToEdit.setArena(null);
  }

}
