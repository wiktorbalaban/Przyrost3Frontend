import {Component, OnInit} from '@angular/core';
import {WarriorService} from '../../../service/warrior.service';
import {Warrior} from '../../../models/warrior';

@Component({
  selector: 'app-warrior-list-paged',
  templateUrl: './warrior-list-paged.component.html',
  styleUrls: ['./warrior-list-paged.component.css']
})
export class WarriorListPagedComponent implements OnInit {
  warriorsPaged: Warrior[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private warriorServicePaged: WarriorService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getWarriorsPaged();
  }

  private getWarriorsPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.warriorServicePaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.warriorsPaged = res.content.map(el => new Warrior(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeWarriorPaged(id: number) {
    this.warriorsPaged = this.warriorsPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove warrior');
  }

}
