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

  ngOnInit() {
    this.isArenaVisible = false;
    this.isNicknameVisible = false;
    this.isWifeVisible = false;
  }

  switchValue(isObjVisible: boolean): boolean {
    return !isObjVisible;
  }
}
