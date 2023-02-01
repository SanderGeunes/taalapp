import { Component } from '@angular/core';
import { WordsService } from '../words.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-vocabulaire',
  templateUrl: './vocabulaire.component.html',
  styleUrls: ['./vocabulaire.component.css']
})
export class VocabulaireComponent {
  constructor(private wordService: WordsService) {

  }
  words: any;
  category: any;
  length: any;
  ngOnInit() {
    let category = sessionStorage.getItem("category");
    this.wordService.getWords(parseFloat(category)).then(data => {
      console.log(data);
      this.length = data.length;
      this.words = data;
      console.log(this.words);
    })
  }
}
