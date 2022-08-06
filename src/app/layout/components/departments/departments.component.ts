import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  selectedCardIndex: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  selectCard(cardIndex: number) {
    
    this.selectedCardIndex = cardIndex;
  }


}
