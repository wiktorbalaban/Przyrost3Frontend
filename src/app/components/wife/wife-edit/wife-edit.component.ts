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
  wifeToEdit: Wife;
  updateWife: Wife;
  updateWifeName: String;
  updateWifeSurname: String;
  updateWifePercentagetopower: number;

  constructor(private wifeService: WifeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.wifeService.getById(this.id).subscribe(
      res => {
        this.wifeToEdit = new Wife(res);
      }
    );
  }

  editWife() {
    if (this.updateWifeName !== undefined && this.updateWifeSurname !== undefined && this.updateWifePercentagetopower !== undefined) {
      this.updateWife = new Wife();
      this.updateWife.setId(this.wifeToEdit.getId());
      this.updateWife.setName(this.updateWifeName);
      this.updateWife.setSurname(this.updateWifeSurname);
      this.updateWife.setPercentagetopower(this.updateWifePercentagetopower);
      this.wifeService.edit(this.updateWife);
      console.log('updateWifeName: ' + this.updateWifeName);
    } else {
      window.alert('Nazwa wife  jest błędna');
    }
  }

}
