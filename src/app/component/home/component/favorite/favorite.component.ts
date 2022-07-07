import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  data: any[] = [];
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }
  showChange() {
    this.show = false;
    this.data = [
      {
        name: "navin",
        age: 23,
        job: "angular",
        location: "bengaluru"
      }, {
        name: "vikash",
        age: 23,
        job: "angular",
        location: "bengaluru"
      },
      {
        name: "macklin",
        age: 18,
        job: "android",
        location: "bengaluru"
      }
    ];
  }
  hideChange() {
    this.show = true;
    this.data = [];
  }
}
