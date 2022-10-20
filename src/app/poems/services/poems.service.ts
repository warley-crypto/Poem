import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poems } from '../models/poems';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  private readonly API = '/assets/poems.json';

  constructor( private HttpClient: HttpClient) { }

  List() {
    return this.HttpClient.get<Poems[]>(this.API);
  }
}
