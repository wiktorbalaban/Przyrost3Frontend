import {Component, OnInit} from '@angular/core';
import {ArenaService} from '../service/arena.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-arena-edit',
  templateUrl: './arena-edit.component.html',
  styleUrls: ['./arena-edit.component.css']
})
export class ArenaEditComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private arenaService: ArenaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }

}
