import {Component, OnInit} from '@angular/core';
import {NicknameService} from '../../../service/nickname.service';
import {Nickname} from '../../../models/nickname';

@Component({
  selector: 'app-nickname-list',
  templateUrl: './nickname-list.component.html',
  styleUrls: ['./nickname-list.component.css']
})
export class NicknameListComponent implements OnInit {
  nicknames: Nickname[];

  constructor(private nicknameService: NicknameService) {
  }

  ngOnInit() {
    this.getNicknames();
  }

  private getNicknames() {
    this.nicknameService.getAll().subscribe(res => {
      this.nicknames = res.map(el => new Nickname(el));
    });
  }

  public removeNickname(id: number) {
    this.nicknames = this.nicknames.filter(el => el.getId() !== id);
    console.log(id, 'remove nickname');
  }

}
