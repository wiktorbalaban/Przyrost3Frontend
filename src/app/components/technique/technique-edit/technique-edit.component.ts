import {Component, OnInit} from '@angular/core';
import {TechniqueService} from '../../../service/technique.service';
import {ActivatedRoute} from '@angular/router';
import {Technique} from '../../../models/technique';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-technique-edit',
  templateUrl: './technique-edit.component.html',
  styleUrls: ['./technique-edit.component.css']
})
export class TechniqueEditComponent implements OnInit {

  id: number;
  private sub: any;
  techniqueToEdit: Technique;
  updateTechnique: Technique;
  updateTechniqueName: String;
  updateTechniquePercentagetopower: number;

  constructor(private techniqueService: TechniqueService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    this.techniqueService.getById(this.id).subscribe(
      res => {
        this.techniqueToEdit = new Technique(res);
      }
    );
  }

  editTechnique() {
    if (this.updateTechniqueName !== undefined && this.updateTechniquePercentagetopower !== undefined) {
      this.updateTechnique = new Technique();
      this.updateTechnique.setId(this.techniqueToEdit.getId());
      this.updateTechnique.setName(this.updateTechniqueName);
      this.updateTechnique.setPercentagetopower(this.updateTechniquePercentagetopower);
      this.techniqueService.edit(this.updateTechnique);
      console.log('updateTechniqueName: ' + this.updateTechniqueName);
    } else {
      window.alert('Nazwa technique  jest błędna');
    }
  }

}
