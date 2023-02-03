import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { Router } from '@angular/router';
import { WordsService } from '../words.service';
import { getLocaleCurrencySymbol } from '@angular/common';
@Component({
  selector: 'app-meerkeuze',
  templateUrl: './meerkeuze.component.html',
  styleUrls: ['./meerkeuze.component.css']
})
export class MeerkeuzeComponent {
  title = 'service';
  wordlist: any;
  word1: any = "W1";
  word2: any = "W2";
  word3: any = "W3";
  word4: any = "W4";
  results: any = "0";
  words: any;
  buttonClicked: any;
  index: any = 0;
  frenchWord: any;
  wordf: any = "Franse woord";
  currentWord: any = "";
  clicked: any = "";
  score: any = 0;
  indexRight = 0;
  progress:any = 0;

  constructor(private wordService: WordsService, private router: Router) { }
  ngOnInit() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        console.log(this.id);
      });
    });

    //scramble the order of the wordlist
    let category = sessionStorage.getItem("category");
    this.wordService.getWords(parseFloat(category)).then(data => {
      // using Lodash to shuffle the Array
      const _ = require('lodash');
      this.words = _.shuffle(data);
      console.log(this.words);
      this.showWords();
    })



  }
  showWords() {
    //generating 3 other  unique dutch words
    if (this.index == this.words.length) {
      let scorePercentage: any = this.score/this.words.length;
      sessionStorage.setItem("score", scorePercentage);
      console.log(scorePercentage);
      this.router.navigateByUrl('resultaat')
    }
    let wordAmount = this.words.length - 1;
    if (this.index == wordAmount) {
      {
        console.log("done");
      }
    }
    console.log(wordAmount);
    this.currentWord = this.words[this.index].word_fr;
    console.log(this.words);
    console.log(this.index);
    // generating 3 unique indexes for wrong answers
    let arrWordOptionsIndex = [];
    while (arrWordOptionsIndex.length < 3) {
      let randomNum = Math.floor(Math.random() * this.words.length);
      if (arrWordOptionsIndex.indexOf(randomNum) === -1 && randomNum !== this.index) {
        arrWordOptionsIndex.push(randomNum);
      }
    }
    //adding index orrect answer
    arrWordOptionsIndex.push(this.index);
    console.log(arrWordOptionsIndex);
    //shuffleing indexes
    const _ = require('lodash');
    let newOrder = _.shuffle(arrWordOptionsIndex);
    //checking index of right answer
    this.indexRight = newOrder.indexOf(parseFloat(this.index));
    this.word1 = this.words[newOrder[0]].word_d;
    this.word2 = this.words[newOrder[1]].word_d;
    this.word3 = this.words[newOrder[2]].word_d;
    this.word4 = this.words[newOrder[3]].word_d;
    this.index += 1;
  }
  //checking if the correct opion is clicked
  checkResults(buttonClicked) {
    console.log("zokpdkzodkzpdok");
    if (this.indexRight == buttonClicked) {
      this.score += 1;
      console.log("juist!");
    }
    this.increaseProgress();
  }
  increaseProgress(){
    let x = 100/this.words.length;
    this.progress = this.progress + x;
  }

}


