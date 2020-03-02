import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers:[NgbCarouselConfig]
})
export class SliderComponent implements OnInit {
  selectedImage;
  constructor(config :NgbCarouselConfig) {
    config.interval=2000;
    config.wrap=false;
    config.keyboard=false;
    config.showNavigationIndicators=false;
    
   }

  ngOnInit(): void {
  }
  images = [944, 1011, 984,879,876,875,910,922].map((n) => `https://picsum.photos/id/${n}/900/500`);
  myClickFunction(src){
    this.selectedImage=src;
    
  }
}
