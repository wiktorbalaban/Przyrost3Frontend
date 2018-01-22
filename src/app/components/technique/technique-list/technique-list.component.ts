import {Component, OnInit} from '@angular/core';
import {TechniqueService} from '../../../service/technique.service';
import {Technique} from '../../../models/technique';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.css']
})
export class TechniqueListComponent implements OnInit {
  techniques: Technique[];

  constructor(private techniqueService: TechniqueService) {
  }

  ngOnInit() {
    this.getTechniques();
  }

  private getTechniques() {
    this.techniqueService.getAll().subscribe(res => {
      this.techniques = res.map(el => new Technique(el));
    });
  }

  public removeTechnique(id: number) {
    this.techniques = this.techniques.filter(el => el.getId() !== id);
    console.log(id, 'remove technique');
  }

}
