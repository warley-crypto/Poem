import { Component, OnInit } from '@angular/core';
import { Poems } from '../models/poems';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {

  poems: Poems[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
