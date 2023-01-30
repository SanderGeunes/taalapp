import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-woordflitser',
  templateUrl: './woordflitser.component.html',
  styleUrls: ['./woordflitser.component.css']
})

export class WoordflitserComponent {
  
  gameStarted = false;
  gameOver = false;
  score = 0;
  currentWord = { word_fr: '', word_d: '', id: ''};
  userAnswer = '';
  words = [];
  progressValue: number = 0;
  someCategory: any = parseFloat(sessionStorage.getItem("category"));
  showTranslation = false;

  constructor(private router: Router, private wordsService: WordsService){
    /*this.words =[];*/
  }

  startGame() {
    /*fetch('http://localhost:8000/api/words/')
      .then(response => response.json())*/
      this.wordsService.getWords(this.someCategory)
      .then(words => {
        this.words = words;
        console.log(words)
        this.gameStarted = true;
        this.getNextWord();
      });
  }
  
  getNextWord() {
    this.showTranslation = false;
    if (this.words.length === 0) {
      this.gameOver = true;
      return;
    }
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];
    this.words.splice(randomIndex, 1);
    this.userAnswer = '';
  }
  
  checkAnswer() {
    if (this.userAnswer === this.currentWord.word_fr) {
      this.score++;
    } else {
      this.score--;
    }
    this.showTranslation = true;
    setTimeout(() => {this.getNextWord();
    }, 2000);
  }

  incrementProgress() {
    let x = 100/this.words.length;
    this.progressValue = this.progressValue + x;
}
  
}

  /*word: string;
  words: any[];
  translation: string;
  translations: string[];
  counter: number;
  score: number;
  progressValue: number = 0;*/
  


  /*constructor(private router: Router, private wordsService: WordsService){
    this.words =[];
   
  }*/

  /*shuffle(a: any[]){
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
    this.word = this.words[this.counter].word_d;
    setTimeout(() => {this.translation = this.words[this.counter].word_fr;
    }, 5000);
    this.incrementProgress();
  }

  wrongWordFunction(){
    this.translation = "";
    this.counter = (this.counter + 1) % this.words.length;
    this.word = this.words[this.counter].word_d;
    setTimeout(() => {this.translation = this.words[this.counter].word_fr;
    }, 5000);
    this.incrementProgress();
  }
  
  incrementProgress() {
      let x = 100/this.words.length;
      this.progressValue = this.progressValue + x;
  }

  getWords () {
    this.wordsService.getWords(1).then(res => {
      this.words = res;
    });
  }

  ngOnInit() {
    this.getWords();
    this.counter = 0;
    console.log(this.words);
    this.word = this.words[this.counter].word_d;
    this.translation = this.words[this.counter].word_fr;
    this.score = 0;
  }

  }
*/

  /*showWords(){
  this.word = "Hallo";
  this.translation = "Bonjour";

  console.log(this.word);

  setTimeout(() => {
    console.log(this.translation);
  }, 5000);
  }*/
