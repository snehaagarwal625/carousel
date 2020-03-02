import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() img1:any;
  @Input() img2:any;
  constructor() { }

  ngOnInit(): void {
  }

}
