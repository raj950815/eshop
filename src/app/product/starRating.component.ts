import { OnInit, Component, Input } from '@angular/core';

@Component({
// tslint:disable-next-line:component-selector
    selector: 'app-StarRating',
    template: `
    <div class="crop"
     [style.width.px]="starWidth"
     [title]="rating">
  <div style="width: 75px">
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
  </div>
</div>
    `,
    styles: [`
    .crop {
        overflow: hidden;
      }
      div {
        cursor: pointer;
      }
`]
})

export class StarRatingComponent implements OnInit {
    @Input() rating = 0;
    starWidth = 0;
    ngOnInit() {
        this.starWidth = this.rating * 75 / 5;
    }
}
