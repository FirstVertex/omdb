import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, MovieDetail } from '../interfaces/movie';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private host: string = 'http://www.omdbapi.com/';
  private apiKey: string = 'aaaf6780';
  private lastSearch: string;

  searchResonse$: BehaviorSubject<SearchResponse | undefined> = new BehaviorSubject<SearchResponse>(undefined);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor(private httpClient: HttpClient) { }

  search(term: string, page: number = 1) {
    this.lastSearch = term;
    this.httpClient
      .get<SearchResponse>(`${this.host}?apiKey=${this.apiKey}&page=${page}&s=${encodeURIComponent(term)}`)
      .pipe(
        tap((value: SearchResponse) => {
          this.searchResonse$.next(value);
          this.currentPage$.next(page);
        }),
      ).subscribe();
  }

  pager(page: number) {
    this.search(this.lastSearch, page);
  }

  getSingle(id: string): Observable<MovieDetail> {
    return this.httpClient
    .get<MovieDetail>(`${this.host}?apiKey=${this.apiKey}&i=${id}`);
  }
}
