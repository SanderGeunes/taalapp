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

  constructor(private router: Router, private wordsService: WordsService){
    this.index = 0;
    this.score = 0;
  }
  ngOnInit(){
    let category:number = parseFloat(sessionStorage.getItem("category"));
    console.log(category)
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
    if (this.currentWord.article_fr === "m"){
      this.score = this.score + 1
    }
    this.index = this.index + 1;
    if (this.index===this.words.length){
      localStorage.setItem("score", this.score);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},200);
    } else {
      this.showWords();
    }
    
  }

  checkIfFemale(){
    if (this.currentWord.article_fr === "f"){
      this.score = this.score + 1
    }
    this.index = this.index + 1
    if (this.index===this.words.length){
      localStorage.setItem("score", this.score);
      setTimeout(() => { this.router.navigateByUrl('resultaat')},200);
    } else {
      this.showWords();
    }
    
  }
}

