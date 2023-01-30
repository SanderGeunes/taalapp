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
  x: number;
  initialWordsLength: number;


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
        this.initialWordsLength = this.words.length;
        this.x = 100/this.words.length;
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
      this.score;
    }
    this.showTranslation = true;
    setTimeout(() => {
      this.getNextWord();
      this.incrementProgress();
    }, 2000);
    //this.incrementProgress();
  }

  incrementProgress() {
    console.log(this.words.length);
    this.progressValue = this.progressValue + this.x;
    console.log(this.progressValue);
} 
}