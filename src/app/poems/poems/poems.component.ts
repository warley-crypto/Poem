import { Component, OnInit } from '@angular/core';
import { Poems } from '../models/poems';
import { PoemsService } from '../services/poems.service';


@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {

  poems: Poems [] = [
    { id: '1', name: 'Warley', title: 'Poesias'}
  ];
  displayedColumns = ['id', 'name', 'title'];

  poemsService: PoemsService;

  constructor() {
    this.poemsService = new PoemsService();
    this.poems = this.poemsService.List();
  }

  ngOnInit(): void {

  }

}
