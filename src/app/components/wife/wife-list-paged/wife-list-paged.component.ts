import {Component, OnInit} from '@angular/core';
import {WifeService} from '../../../service/wife.service';
import {Wife} from '../../../models/wife';

@Component({
  selector: 'app-wife-list-paged',
  templateUrl: './wife-list-paged.component.html',
  styleUrls: ['./wife-list-paged.component.css']
})
export class WifeListPagedComponent implements OnInit {
  wivesPaged: Wife[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private serviceWifePaged: WifeService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getWivesPaged();
  }

  private getWivesPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.serviceWifePaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.wivesPaged = res.content.map(el => new Wife(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeWifePaged(id: number) {
    this.wivesPaged = this.wivesPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove wife');
  }

}
