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
  words: any[];
  translation: string;
  translations: string[];
  counter: number;
  score: number;
  progressValue: number = 0;


  constructor(/*private router: Router, private wordsService: WordsService*/){
    this.words =[
      { word: "Hallo", translation: "Bonjour" },
      { word: "Dag", translation: "Au revoir" },
      { word: "Goed zo", translation: "Bien fait!" }
    ];
    this.counter = 0;
    this.shuffle(this.words);
    this.word = this.words[this.counter].word;
    this.translation = this.words[this.counter].translation;
    this.score = 0;
  }

  shuffle(a){
    for (let i = this.words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.words[i], this.words[j]] = [this.words[j], this.words[i]];
  }
  return a;
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
    this.word = this.words[this.counter].word;
    setTimeout(() => {this.translation = this.words[this.counter].translation;
    }, 5000);
    this.incrementProgress();
  }

  wrongWordFunction(){
    this.translation = "";
    this.counter = (this.counter + 1) % this.words.length;
    this.word = this.words[this.counter].word;
    setTimeout(() => {this.translation = this.words[this.counter].translation;
    }, 5000);
    this.incrementProgress();
  }
  
  incrementProgress() {
    this.progressValue += 10;
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
