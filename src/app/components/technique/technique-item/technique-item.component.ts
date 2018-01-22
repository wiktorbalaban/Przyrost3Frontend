import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Technique} from '../../../models/technique';
import {TechniqueService} from '../../../service/technique.service';

@Component({
  selector: 'app-technique-item',
  templateUrl: './technique-item.component.html',
  styleUrls: ['./technique-item.component.css']
})
export class TechniqueItemComponent implements OnInit {
  @Input() technique: Technique;
  @Output() removeTechnique: EventEmitter<number> = new EventEmitter();

  constructor(private techniqueService: TechniqueService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeTechnique.emit(id);
  }

  deleteTechnique(id: number) {
    this.techniqueService.delete(id);
    this.remove(id);
    console.log('deleteTechnique');
  }
}
