import {Component, OnInit} from '@angular/core';
import {TechniqueService} from '../../../service/technique.service';
import {Technique} from '../../../models/technique';

@Component({
  selector: 'app-technique-add',
  templateUrl: './technique-add.component.html',
  styleUrls: ['./technique-add.component.css']
})
export class TechniqueAddComponent implements OnInit {
  newTechniqueName: String;
  newTechniquePercentagetopower: number;
  newTechnique: Technique;

  constructor(private techniqueService: TechniqueService) {
  }

  ngOnInit() {
    this.newTechniqueName = '';
    this.newTechnique = new Technique();
  }

  createNewTechnique() {
    if (this.newTechniqueName !== '') {
      this.newTechnique.setName(this.newTechniqueName);
      this.newTechnique.setPercentagetopower(this.newTechniquePercentagetopower);
      this.techniqueService.createNew(this.newTechnique);
      this.newTechniqueName = '';
      this.newTechniquePercentagetopower = undefined;
    } else {
      window.alert('brak nazwy technique');
    }
  }
}
