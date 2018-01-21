import {Component, OnInit} from '@angular/core';
import {WifeService} from '../../../service/wife.service';
import {Wife} from '../../../models/wife';

@Component({
  selector: 'app-wife-list',
  templateUrl: './wife-list.component.html',
  styleUrls: ['./wife-list.component.css']
})
export class WifeListComponent implements OnInit {
  wives: Wife[];

  constructor(private wifeService: WifeService) {
  }

  ngOnInit() {
    this.getWives();
  }

  private getWives() {
    this.wifeService.getAll().subscribe(res => {
      this.wives = res.map(el => new Wife(el));
    });
  }

  public removeWife(id: number) {
    this.wives = this.wives.filter(el => el.getId() !== id);
    console.log(id, 'remove wife');
  }

}
