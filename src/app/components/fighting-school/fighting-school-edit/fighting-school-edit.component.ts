import {Component, OnInit} from '@angular/core';
import {WifeService} from '../../../service/wife.service';
import {ActivatedRoute} from '@angular/router';
import {Wife} from '../../../models/wife';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-wife-edit',
  templateUrl: './wife-edit.component.html',
  styleUrls: ['./wife-edit.component.css']
})
export class WifeEditComponent implements OnInit {

  id: number;
  private sub: any;
  wife: Wife;
  updateWife: Wife;
  updateWifeName: String;

  constructor(private wifeService: WifeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.wifeService.getById(this.id).subscribe(
      res => {
        this.wife = new Wife(res);
      }
    );
  }

  editWife() {
    if (this.updateWifeName !== undefined) {
      this.updateWife = new Wife();
      this.updateWife.setId(this.wife.getId());
      this.updateWife.setName(this.updateWifeName);
      this.wifeService.edit(this.updateWife);
      console.log('updateWifeName: ' + this.updateWifeName);
    } else {
      window.alert('Nazwa wife jest błędna');
    }
  }

}
