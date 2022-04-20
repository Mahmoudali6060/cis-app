import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public imageIndex: number = 3;

  constructor() { }

  ngOnInit(): void { }

  public prev() {
    if (this.imageIndex > 1) {
      this.imageIndex--;

    }

  }

  public next() {
    if (this.imageIndex < 3) {
      this.imageIndex++;
    }
  }
}
