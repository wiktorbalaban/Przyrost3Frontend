import {Component, OnInit} from '@angular/core';
import {TechniqueService} from '../../../service/technique.service';
import {Technique} from '../../../models/technique';

@Component({
  selector: 'app-technique-list-paged',
  templateUrl: './technique-list-paged.component.html',
  styleUrls: ['./technique-list-paged.component.css']
})
export class TechniqueListPagedComponent implements OnInit {
  techniquesPaged: Technique[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private serviceTechniquePaged: TechniqueService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getTechniquesPaged();
  }

  private getTechniquesPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.serviceTechniquePaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.techniquesPaged = res.content.map(el => new Technique(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeTechniquePaged(id: number) {
    this.techniquesPaged = this.techniquesPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove technique');
  }

}
