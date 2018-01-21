import { Component, OnInit } from '@angular/core';
import { WifeService } from '../../../service/wife.service';

@Component({
  selector: 'app-wife-add',
  templateUrl: './wife-add.component.html',
  styleUrls: ['./wife-add.component.css']
})
export class WifeAddComponent implements OnInit {
  newWifeName: String;

  constructor(private wifeService: WifeService) {}

  ngOnInit() {
    this.newWifeName = '';
  }

  createNewWife() {
    if (this.newWifeName !== '') {
      // this.wifeService.createNew(this.newWifeName);
      this.newWifeName = '';
    } else {
      window.alert('brak nazwy wife');
    }
  }
}
