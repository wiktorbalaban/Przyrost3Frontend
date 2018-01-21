import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Wife} from '../../../models/wife';
import {WifeService} from '../../../service/wife.service';

@Component({
  selector: 'app-wife-item',
  templateUrl: './wife-item.component.html',
  styleUrls: ['./wife-item.component.css']
})
export class WifeItemComponent implements OnInit {
  @Input() wife: Wife;
  @Output() removeWife: EventEmitter<number> = new EventEmitter();

  constructor(private wifeService: WifeService) {
  }

  ngOnInit() {
  }

  remove(id: number) {
    this.removeWife.emit(id);
  }

  deleteWife(id: number) {
    this.wifeService.delete(id);
    this.remove(id);
    console.log('deleteWife');
  }
}
