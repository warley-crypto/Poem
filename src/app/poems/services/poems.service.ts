import { Injectable } from '@angular/core';
import { Poems } from '../models/poems';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor() { }

  List(): Poems[] {
    return [
      { id: '1', name: 'Warley', title: 'Poesias'}
    ];
  }
}
