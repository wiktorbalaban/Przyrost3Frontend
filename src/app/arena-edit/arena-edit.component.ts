import {Component, OnInit} from '@angular/core';
import {ArenaService} from '../service/arena.service';
import {ActivatedRoute} from '@angular/router';
import {Arena} from '../models/arena';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-arena-edit',
  templateUrl: './arena-edit.component.html',
  styleUrls: ['./arena-edit.component.css']
})
export class ArenaEditComponent implements OnInit {

  id: number;
  private sub: any;
  arena: Arena;
  updateArena: Arena;
  updateArenaName: String;

  constructor(private arenaService: ArenaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.arenaService.getById(this.id).subscribe(
      res => {
        this.arena = new Arena(res);
      }
    );
  }

  editArena() {
    if (this.updateArenaName !== undefined) {
      this.updateArena = new Arena();
      this.updateArena.setId(this.arena.getId());
      this.updateArena.setName(this.updateArenaName);
      this.arenaService.edit(this.updateArena);
      console.log('updateArenaName: ' + this.updateArenaName);
    } else {
      window.alert('Nazwa areny jest błędna');
    }
  }

}
