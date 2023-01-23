import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lidwoorden',
  templateUrl: './lidwoorden.component.html',
  styleUrls: ['./lidwoorden.component.css']
})
export class LidwoordenComponent {

  ngOnInit(){
    this.showWords();
    
  }
  constructor(private router: Router){
    this.index = 0;
    this.score = 0;
  }
  score: any;
  index: number;

  words: any = [
    {
      "id": 17,
      "word_fr": "famille",
      "word_d": "familie",
      "photo": "url",
      "article_fr": "une",
      "category_id": 2,
      "type_id": 1
    },
    {
      "id": 18,
      "word_fr": "frère",
      "word_d": "broer",
      "photo": "url",
      "article_fr": "un",
      "category_id": 2,
      "type_id": 1
    },
    {
      "id": 19,
      "word_fr": "sœur",
      "word_d": "zus",
      "photo": "url",
      "article_fr": "une",
      "category_id": 2,
      "type_id": 1
    }
  ]
  currentWord:any;


  showWords(){ 
      this.currentWord = this.words[this.index];
      
    
  }
  checkIfMale(){
    if (this.currentWord.article_fr === "un"){
      this.score = this.score + 1
    }
    this.index = this.index + 1;
    if (this.index===this.words.length){
      localStorage.setItem("score", this.score);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},1000);
    } else {
      this.showWords();
    }
    
  }

  checkIfFemale(){
    if (this.currentWord.article_fr === "une"){
      this.score = this.score + 1
    }
    this.index = this.index + 1
    if (this.index===this.words.length){
      localStorage.setItem("score", this.score);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},1000);
    } else {
      this.showWords();
    }
    
  }
}

