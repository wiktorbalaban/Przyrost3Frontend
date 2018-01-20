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

  constructor(private arenaService: ArenaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // this.arenaService.getById(this.id).subscribe(res => {
    //   this.arena = res.map(el => new Arena(el));
    // });
    this.arenaService.getById(this.id).subscribe(
      res => {
        console.log(res);
        this.arena = new Arena(res);
        console.log(this.arena.getName());
      }
    );
  }

}
