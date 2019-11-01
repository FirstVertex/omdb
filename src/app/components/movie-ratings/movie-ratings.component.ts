import { Component, OnInit, Input } from '@angular/core';
import { Rating } from 'src/app/interfaces/movie';

export interface RatingViewModel extends Rating {
  animValue: string;
}

@Component({
  selector: 'app-movie-ratings',
  templateUrl: './movie-ratings.component.html',
  styleUrls: ['./movie-ratings.component.scss']
})
export class MovieRatingsComponent implements OnInit {
  @Input() ratings: Rating[];
  ratingsVms: RatingViewModel[];

  constructor() { }

  ngOnInit() {
    this.ratingsVms = this.ratings.map((rating: Rating) => { return {
        animValue: '0px',
        ...rating
      };
    });
    setTimeout(() => {
      this.ratingsVms.forEach((vm: RatingViewModel) => vm.animValue = vm.Value);
    }, 0);
  }

}
