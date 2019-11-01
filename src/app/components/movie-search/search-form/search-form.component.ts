import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  term: string;

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

  search() {
    this.omdbService.search(this.term);
  }
}
