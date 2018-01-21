import {Component, OnInit} from '@angular/core';
import {NicknameService} from '../../../service/nickname.service';
import {Nickname} from '../../../models/nickname';

@Component({
  selector: 'app-nickname-list-paged',
  templateUrl: './nickname-list-paged.component.html',
  styleUrls: ['./nickname-list-paged.component.css']
})
export class NicknameListPagedComponent implements OnInit {
  nicknamesPaged: Nickname[];
  page: number;
  size: number;
  totalPages: number;

  constructor(private serviceNicknamePaged: NicknameService) {
  }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getNicknamesPaged();
  }

  private getNicknamesPaged() {
    console.log('page ' + (this.page - 1) + ' size ' + this.size);
    if (this.page >= 1) {
      this.serviceNicknamePaged.getAllPaged(this.page - 1, this.size).subscribe(res => {
        console.log(res);
        this.totalPages = res.totalPages;
        if (this.totalPages >= this.page) {
          this.nicknamesPaged = res.content.map(el => new Nickname(el));
        } else {
          window.alert('Przekroczono limit stron');
        }
      });
    } else {
      window.alert('Numer strony musi być większy lub równy 1');
    }
  }

  public removeNicknamePaged(id: number) {
    this.nicknamesPaged = this.nicknamesPaged.filter(el => el.getId() !== id);
    console.log(id, 'remove Nickname');
  }

}
