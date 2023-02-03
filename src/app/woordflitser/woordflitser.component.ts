import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-woordflitser',
  templateUrl: './woordflitser.component.html',
  styleUrls: ['./woordflitser.component.css']
})

export class WoordflitserComponent implements OnInit {
  
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
  percentageScore: any;


  constructor(private router: Router, private wordsService: WordsService){
  }

  // function to retrieve words from chosen category via wordsService, 
  // establishing length of category (in the context of determining a percentagescore)
  // launching game
  ngOnInit() {
      this.wordsService.getWords(this.someCategory)
      .then(words => {
        this.words = words;
        this.initialWordsLength = this.words.length;
        this.x = 100/this.words.length;
        this.gameStarted = true;
        this.getNextWord();
      });
  }
  
  // function to determine whether the game is ended or a new word must be presented
  // code to determine the percentage, rounded to an integer
  // enabling timeout to display the result for a sufficient time, with referal to resultspage
  getNextWord() {
    this.showTranslation = false;
    if (this.words.length === 0) {
      this.gameOver = true;
      this.percentageScore= this.score/this.initialWordsLength;
      sessionStorage.setItem("score", this.percentageScore);
      setTimeout(() => {this.router.navigateByUrl('resultaat');},4000);
      return;
    }
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[randomIndex];
    this.words.splice(randomIndex, 1);
    this.userAnswer = '';
  }
  
  // function to evaluate the entry and adjust the score
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
  }

  // function to visualize the progress in the exercise
  incrementProgress() {
    this.progressValue = this.progressValue + this.x;
} 
}