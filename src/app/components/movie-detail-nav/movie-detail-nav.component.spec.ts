import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailNavComponent } from './movie-detail-nav.component';

describe('MovieDetailNavComponent', () => {
  let component: MovieDetailNavComponent;
  let fixture: ComponentFixture<MovieDetailNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
