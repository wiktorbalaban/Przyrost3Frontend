import {Component, OnInit} from '@angular/core';
import {TechniqueService} from '../../../service/technique.service';
import {Technique} from '../../../models/technique';

@Component({
  selector: 'app-technique-search',
  templateUrl: './technique-search.component.html',
  styleUrls: ['./technique-search.component.css']
})
export class TechniqueSearchComponent implements OnInit {
  searchPhrase: String;
  searchedTechniques: Technique[];

  constructor(private techniqueSearchService: TechniqueService) {
  }

  ngOnInit() {
    this.searchPhrase = '';
  }

  searchTechnique() {
    if (this.searchPhrase !== '') {
      this.techniqueSearchService.getByName(this.searchPhrase).subscribe(res => {
        this.searchedTechniques = res.map(el => new Technique(el));
      });
      this.searchPhrase = '';
    } else {
      window.alert('brak frazy do wyszukania');
    }
  }

  public removeSearchedTechnique(id: number) {
    this.searchedTechniques = this.searchedTechniques.filter(el => el.getId() !== id);
    console.log(id, 'remove technique');
  }
}
