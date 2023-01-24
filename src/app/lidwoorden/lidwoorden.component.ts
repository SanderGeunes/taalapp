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
  //instantiating routing and service capabilities
  constructor(private router: Router, private wordsService: WordsService){
    this.index = 0;
    this.score = 0;
  }
  ngOnInit(){
    // retrieving the category_id from the session storage
    let category:number = parseFloat(sessionStorage.getItem("category"));
    console.log(category)
    // calling the service function to fetch data 
    this.wordsService.getWords(category).then(data=>{
      this.words = data.filter(element=>element.type_id===1)
      this.showWords();
    })
    
    
  }
  score: any; 
  index: number;
  words: any;
  currentWord:any;


  showWords(){ 
      this.currentWord = this.words[this.index];  
  }

  checkIfMale(){
    //if article is male, increase score by 1
    if (this.currentWord.article_fr === "m"){
      this.score = this.score + 1
    }
    // increasing the index
    this.index = this.index + 1;
    // if there are no more words left, save score to session storage and navigate to 'resultaat' component
    if (this.index===this.words.length){
      sessionStorage.setItem("score", this.score);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},200);
    } else {
      this.showWords();
    }
    
  }

  checkIfFemale(){
    //if article is male, increase score by 1
    if (this.currentWord.article_fr === "f"){
      this.score = this.score + 1
    }
    // increasing the index
    this.index = this.index + 1;
    // if there are no more words left, save score to session storage and navigate to 'resultaat' component
    if (this.index===this.words.length){
      sessionStorage.setItem("score", this.score);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},200);
    } else {
      this.showWords();
    }
    
  }
}

