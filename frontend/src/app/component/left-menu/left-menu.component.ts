import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  spanVision = false;

   colors = ["red", "green", "blue"];
   topics = ["opium", "test", "university", "wqeqe qwewqewqeqw"];
   color = "pink";
   topic = "test";

  ngOnInit(): void {
  }
}
