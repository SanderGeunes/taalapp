import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-lidwoorden',
  templateUrl: './lidwoorden.component.html',
  styleUrls: ['./lidwoorden.component.css']
})
export class LidwoordenComponent {
  score: any; 
  index: number;
  words: any;
  currentWord:any;
  showRight: boolean;
  showWrong: boolean;
  progress: number;

  //instantiating routing and service capabilities
  constructor(private router: Router, private wordsService: WordsService){
    this.index = 0;
    this.score = 0;
    this.showRight = false;
    this.showWrong = false;
    this.progress = 0;
  }
  
  ngOnInit(){
    // retrieving the category_id from the session storage
    let category:number = parseFloat(sessionStorage.getItem("category"));
    console.log(category)
    // calling the service function to fetch data 
    this.wordsService.getWords(category).then(data=>{
      // using Lodash to shuffle the Array
      const _ = require('lodash');
      this.words = _.shuffle(data.filter(element=>element.type_id===1));
      console.log(this.words)
      this.showWords();
    }) 
  }
  
  showWords(){ 
      this.currentWord = this.words[this.index];  
  }

  checkIfGenderCorrect(gender: string){
    //if article is male, increase score by 1 and show picture "right answer"
    if (this.currentWord.article_fr === gender){
      this.score = this.score + 1;
      this.showWrong = false;
      this.showRight = true;
    } else {
      this.showRight = false;
      this.showWrong = true;
    }
    // increasing the index + progress
    this.index = this.index + 1;
    this.increaseProgress();
    // if there are no more words left, save score to session storage and navigate to 'resultaat' component
    if (this.index===this.words.length){
      let scorePercentage: any = this.score/this.words.length;
      sessionStorage.setItem("score", scorePercentage);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},200);
    } else {
      this.showWords();
    }
  }

  // function to increase progress bar
  increaseProgress(){
    let x = 100/this.words.length;
    this.progress = this.progress + x;
  }
}

