import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  cards = [
      {title: 'Card 1', cols: 2, rows: 1},
      {title: 'Card 2', cols: 1, rows: 1},
      {title: 'Card 3', cols: 1, rows: 2},
      {title: 'Card 4', cols: 1, rows: 1}
  ]

  constructor() { }

  ngOnInit() {
  }

}
