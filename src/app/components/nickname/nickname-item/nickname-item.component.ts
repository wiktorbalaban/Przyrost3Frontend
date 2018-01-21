import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Nickname} from '../../../models/nickname';
import {NicknameService} from '../../../service/nickname.service';

@Component({
  selector: 'app-nickname-item',
  templateUrl: './nickname-item.component.html',
  styleUrls: ['./nickname-item.component.css']
})
export class NicknameItemComponent implements OnInit {
  @Input() nickname: Nickname;
  @Output() removeNickname: EventEmitter<number> = new EventEmitter();

  constructor(private nicknameService: NicknameService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeNickname.emit(id);
  }

  deleteNickname(id: number) {
    this.nicknameService.delete(id);
    this.remove(id);
    console.log('deleteNickname');
  }
}
