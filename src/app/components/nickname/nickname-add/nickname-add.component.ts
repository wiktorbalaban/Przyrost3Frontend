import { Component, OnInit } from '@angular/core';
import { NicknameService } from '../../../service/nickname.service';

@Component({
  selector: 'app-nickname-add',
  templateUrl: './nickname-add.component.html',
  styleUrls: ['./nickname-add.component.css']
})
export class NicknameAddComponent implements OnInit {
  newNicknameName: String;

  constructor(private nicknameService: NicknameService) {}

  ngOnInit() {
    this.newNicknameName = '';
  }

  createNewNickname() {
    if (this.newNicknameName !== '') {
      this.nicknameService.createNew(this.newNicknameName);
      this.newNicknameName = '';
    } else {
      window.alert('brak nazwy nickname');
    }
  }
}
