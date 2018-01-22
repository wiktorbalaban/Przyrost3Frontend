import {Component, OnInit} from '@angular/core';
import {FightingSchoolService} from '../../../service/fighting-school.service';
import {FightingSchool} from '../../../models/fighting-school';

@Component({
  selector: 'app-fighting-school-list-paged',
  templateUrl: './fighting-school-list-paged.component.html',
  styleUrls: ['./fighting-school-list-paged.component.css']
})
export class FightingSchoolListPagedComponent implements OnInit {
  fightingSchoolsPaged: FightingSchool[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private serviceFightingSchoolPaged: FightingSchoolService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getFightingSchoolsPaged();
  }

  private getFightingSchoolsPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.serviceFightingSchoolPaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.fightingSchoolsPaged = res.content.map(el => new FightingSchool(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeFightingSchoolPaged(id: number) {
    this.fightingSchoolsPaged = this.fightingSchoolsPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove fightingSchool');
  }

}
