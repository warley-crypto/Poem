import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Poems } from '../models/poems';
import { PoemsService } from '../services/poems.service';


@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {

  poems: Observable <Poems []>;
  displayedColumns = ['id', 'name', 'title'];

  constructor(private poemsService: PoemsService) {
    this.poems = this.poemsService.List();

  }

  ngOnInit(): void {

  }

}
