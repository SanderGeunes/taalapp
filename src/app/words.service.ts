import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor() { }
  getWords(category : any){
    return fetch('http://localhost:8000/api/words/' + category).then(res => res.json())
  }
}
