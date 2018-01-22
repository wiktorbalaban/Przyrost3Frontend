import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Przyrost3';
  isArenaVisible: boolean;
  isNicknameVisible: boolean;
  isWifeVisible: boolean;
  isFightingSchoolVisible: boolean;
  isTechniqueVisible: boolean;
  isWarriorVisible: boolean;

  ngOnInit() {
    this.isArenaVisible = false;
    this.isNicknameVisible = false;
    this.isWifeVisible = false;
    this.isFightingSchoolVisible = false;
    this.isTechniqueVisible = false;
    this.isWarriorVisible = false;
  }

  switchValue(isObjVisible: boolean): boolean {
    return !isObjVisible;
  }
}
