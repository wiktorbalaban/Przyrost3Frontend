import {Component, OnInit} from '@angular/core';
import {WifeService} from '../../../service/wife.service';
import {Wife} from '../../../models/wife';

@Component({
  selector: 'app-wife-add',
  templateUrl: './wife-add.component.html',
  styleUrls: ['./wife-add.component.css']
})
export class WifeAddComponent implements OnInit {
  newWifeName: String;
  newWifeSurname: String;
  newWifePercentagetopower: number;
  newWife: Wife;

  constructor(private wifeService: WifeService) {
  }

  ngOnInit() {
    this.newWifeName = '';
    this.newWife = new Wife();
  }

  createNewWife() {
    if (this.newWifeName !== '') {
      this.newWife.setName(this.newWifeName);
      this.newWife.setSurname(this.newWifeSurname);
      this.newWife.setPercentagetopower(this.newWifePercentagetopower);
      this.wifeService.createNew(this.newWife);
      this.newWifeName = '';
      this.newWifeSurname = '';
      this.newWifePercentagetopower = undefined;
    } else {
      window.alert('brak nazwy wife');
    }
  }
}
