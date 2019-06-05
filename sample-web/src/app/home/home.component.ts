import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class HomeComponent implements OnInit {

  constructor(siva: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    siva.interval = 2000;
    siva.wrap = true;
    siva.keyboard = false;
    siva.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
