import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/app/interfaces/movie';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  searchResonse$: Observable<SearchResponse | undefined>;
  currentPage: number;
  totalPages = 1;
  pageNumbers: number[];
  private maxPages = 5;

  constructor(private omdbService: OmdbService) {
    this.searchResonse$ = this.omdbService.searchResonse$.asObservable();

    this.omdbService.searchResonse$.pipe(
      tap((sr: SearchResponse) => {
        this.totalPages = sr ? Math.min(this.maxPages, Math.ceil(+sr.totalResults / 10)) : 0;
        this.pageNumbers = Array(this.totalPages).fill(0).map((x, i) => i + 1);
      })
    ).subscribe();
    this.omdbService.currentPage$.pipe(
      tap((cp: number) => this.currentPage = cp)
    ).subscribe();
  }

  ngOnInit() {
  }

  pager(page: number) {
    this.omdbService.pager(page);
  }
}
