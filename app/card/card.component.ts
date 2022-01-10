import { Component, OnInit } from '@angular/core';
import { ls } from "../ls.service"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  genres: object
  
  constructor(private localStorage: ls) { }

  ngOnInit() {
  }

}
