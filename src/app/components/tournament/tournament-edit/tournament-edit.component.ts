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
  isEditingPaged: boolean;

  page: number;
  size: number;
  totalPages: number;

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
    this.page = 1;
    this.size = 10;
  }

  editTournamentT() {
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

  private getParticipantsPagedT() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.participantsService.getAllPaged(this.page - 1, this.size).subscribe(res => {
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

  editParticipantsT() {
    this.isEditingPaged = false;
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

  confirmParticipantsT() {
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

  editParticipantsPagedT() {
    this.isEditingPaged = true;

    if (this.teToChoose !== undefined && this.teToChoose.length > 0
      && this.teToChooseFlag !== undefined && this.teToChooseFlag.length > 0) {
      console.log('confirm');
      for (const index in this.teToChoose) {
        if (this.teToChooseFlag[index] === true) {
          if (this.tournamentToEdit.getParticipants().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
            this.tournamentToEdit.getParticipants().push(this.teToChoose[index]);
          } else {
            // this.warriorToEdit.getTechniques().filter( obj => obj.getId() !== this.teToChoose[index].getId());
          }
        } else {
          if (this.tournamentToEdit.getParticipants().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
            // this.warriorToEdit.getTechniques().push(this.teToChoose[index]);
          } else {
            // this.warriorToEdit.getTechniques().filter(obj => obj.getId() !== this.teToChoose[index].getId());
            // console.log('this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId())..getId() ' +
            //   this.warriorToEdit.getTechniques().find(t => t.getId() === this.teToChoose[index].getId()).getId());
            const idToRemove = this.tournamentToEdit.getParticipants().find(t => t.getId() === this.teToChoose[index].getId()).getId();
            let i: number;
            i = 0;
            for (const index2 in this.teToChoose) {
              if (this.tournamentToEdit.getParticipants()[index2].getId() === idToRemove) {
                // console.log('indexRoremove ' + i);
                // console.log('this.warriorToEdit.getTechniques()[i].getId() ' + this.warriorToEdit.getTechniques()[i].getId());
                this.tournamentToEdit.setParticipants(this.tournamentToEdit.getParticipants().slice(i + 1, 1));
                // console.log('this.warriorToEdit.getTechniques()[i].getId() ' + this.warriorToEdit.getTechniques()[i].getId());
                break;
              }
              i++;
            }
          }
        }
      }
    }

    this.teToChoose = [];
    this.teToChooseFlag = [];

    setTimeout(() => {
        this.getParticipantsPagedT();
        setTimeout(() => {
            console.log('this.teToChoose' + this.teToChoose);
            if (this.teToChoose !== undefined) {
              if (this.teToChoose.length > 0) {
                console.log('get paged');
                this.teToChooseFlag = [];
                for (const index in this.teToChoose) {
                  // console.log('t ' + t);
                  if (this.tournamentToEdit.getParticipants().find(t => t.getId() === this.teToChoose[index].getId()) === undefined) {
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

          },
          100);

      },
      100);

  }

  switchTeToChooseFlagT(index: number) {
    if (index < this.teToChooseFlag.length) {
      this.teToChooseFlag[index] = !this.teToChooseFlag[index];
    }
  }

  stopEditPagedT() {
    this.areTeEditing = false;
  }

}
