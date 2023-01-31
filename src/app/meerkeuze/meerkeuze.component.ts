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
  router: any;
  buttonClicked: any;
  index: any = 0;
  frenchWord: any;
  wordf: any = "Franse woord";
  currentWord: any = "";
  clicked: any ="";

  constructor(private wordService: WordsService) { }
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
      this.showWords(this.buttonClicked);
    })



  }
  showWords(buttonClicked) {
    this.clicked = buttonClicked;
    console.log("buttonclicked= " + buttonClicked)
    //generating 3 other  unique dutch words
    if (this.index == this.words.length) {
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
    let indexRightAnswer = newOrder.indexOf(parseFloat(this.index));
    this.word1 = this.words[newOrder[0]].word_d;
    this.word2 = this.words[newOrder[1]].word_d;
    this.word3 = this.words[newOrder[2]].word_d;
    this.word4 = this.words[newOrder[3]].word_d;

    console.log("buttonclicked=" + buttonClicked, "indexright=" + indexRightAnswer)
    if (buttonClicked == indexRightAnswer) {
      console.log("correct: score +1");
    }
    this.index += 1;
  }

}


