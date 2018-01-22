import {Component, OnInit} from '@angular/core';
import {WarriorService} from '../../../service/warrior.service';
import {Warrior} from '../../../models/warrior';

@Component({
  selector: 'app-warrior-list',
  templateUrl: './warrior-list.component.html',
  styleUrls: ['./warrior-list.component.css']
})
export class WarriorListComponent implements OnInit {
  warriors: Warrior[];

  constructor(private warriorService: WarriorService) {
  }

  ngOnInit() {
    this.getWarriors();
  }

  private getWarriors() {
    this.warriorService.getAll().subscribe(res => {
      this.warriors = res.map(el => new Warrior(el));
    });
  }

  public removeWarrior(id: number) {
    this.warriors = this.warriors.filter(el => el.getId() !== id);
    console.log(id, 'remove warrior');
  }

}
