import {Component, OnInit} from '@angular/core';
import {NicknameService} from '../../../service/nickname.service';
import {ActivatedRoute} from '@angular/router';
import {Nickname} from '../../../models/nickname';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nickname-edit',
  templateUrl: './nickname-edit.component.html',
  styleUrls: ['./nickname-edit.component.css']
})
export class NicknameEditComponent implements OnInit {

  id: number;
  private sub: any;
  nickname: Nickname;
  updateNickname: Nickname;
  updateNicknameName: String;

  constructor(private nicknameService: NicknameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.nicknameService.getById(this.id).subscribe(
      res => {
        this.nickname = new Nickname(res);
      }
    );
  }

  editNickname() {
    if (this.updateNicknameName !== undefined) {
      this.updateNickname = new Nickname();
      this.updateNickname.setId(this.nickname.getId());
      this.updateNickname.setName(this.updateNicknameName);
      this.nicknameService.edit(this.updateNickname);
      console.log('updateNicknameName: ' + this.updateNicknameName);
    } else {
      window.alert('Nazwa nickname jest błędna');
    }
  }

}
