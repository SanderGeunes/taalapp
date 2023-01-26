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
  words: string[];
  translation: string;
  translations: string[];
  counter: number;
  score: number;


  constructor(/*private router: Router, private wordsService: WordsService*/){
    this.words = ["Hallo", "Dag", "Goed zo"];
    this.translations = ["Bonjour", "Au revoir", "Bien fait!"];
    this.counter = 0;
    this.word = this.words[this.counter];
    this.translation = this.translations[this.counter];
    this.score=0
  }


  showWords(){
    this.word;
    setTimeout(() => {this.translation;
    }, 5000);
  }

  updateWords(){
    this.translation = "";
    this.score = (this.score + 1) % this.words.length;
    this.counter = (this.counter + 1) % this.words.length;
    this.word = this.words[this.counter];
    setTimeout(() => {this.translation = this.translations[this.counter];
    }, 5000);
  }

  wrongWordFunction(){
    this.translation = "";
    this.counter = (this.counter + 1) % this.words.length;
    this.word = this.words[this.counter];
    setTimeout(() => {this.translation = this.translations[this.counter];
    }, 5000);
  }
  }
  /*showWords(){
  this.word = "Hallo";
  this.translation = "Bonjour";

  console.log(this.word);

  setTimeout(() => {
    console.log(this.translation);
  }, 5000);
  }*/
