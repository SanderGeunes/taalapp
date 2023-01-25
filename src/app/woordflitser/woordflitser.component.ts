import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { WordsService } from '../words.service';

@Component({
  selector: 'app-woordflitser',
  templateUrl: './woordflitser.component.html',
  styleUrls: ['./woordflitser.component.css']
})
export class WoordflitserComponent {
  word: string;
  translation: string;

  //constructor(private router: Router, private wordsService: WordsService){}

  showWords(){
  this.word = "Hallo";
  this.translation = "Bonjour";

  console.log(this.word);

  setTimeout(() => {
    console.log(this.translation);
  }, 5000);
  }
}
