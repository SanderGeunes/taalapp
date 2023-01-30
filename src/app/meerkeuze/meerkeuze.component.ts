import { Component } from '@angular/core';
import { generate } from 'rxjs';

import { WordsService } from '../words.service';
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
  words: any;
  buttonClicked: any;
  index: any = 0;
  frenchWord: any;
  wordf: any = "Franse woord";
  currentWord: any = "";

  constructor(private wordService: WordsService) { }
  ngOnInit() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
       console.log(this.id);
      });
    });

    //scramble the order of the wordlist
    let category = sessionStorage.getItem("category");
    this.wordService.getWords(parseFloat(category)).then(data => {
      // using Lodash to shuffle the Array
      const _ = require('lodash');
      this.words = _.shuffle(data.filter(element => element.type_id === 1));
      console.log(this.words);
      this.showWords(this.buttonClicked);
    })



  }
  showWords(buttonClicked) {
    console.log("buttonclicked= " + buttonClicked)
    //generating 3 other  unique dutch words
    if(buttonClicked == "1")
    {
      console.log("correct");
    }
    let wordAmount = this.words.length;
    if(this.index == wordAmount){
      {
        console.log("done");
      }
    }
    console.log(wordAmount);
    let index1 = Math.floor(Math.random() * wordAmount);
    let index2 = Math.floor(Math.random() * wordAmount);
    let index3 = Math.floor(Math.random() * wordAmount);
    console.log(index1)
    console.log(index2)
    console.log(index3)
    this.word1 = this.words[this.index].word_d;
    while (index1 == this.index) {
      index1 = Math.floor(Math.random() * wordAmount);
    }
    this.word2 = this.words[index1].word_d;
    while (index2 == this.index || index2 == index1) {
      index2 = Math.floor(Math.random() * wordAmount);
    }
    this.word3 = this.words[index2].word_d;
    while (index3 == this.index || index3 == index1 || index3 == index2) {
      index3 = Math.floor(Math.random() * wordAmount);
    }
    this.word4 = this.words[index3].word_d;
    this.currentWord = this.words[this.index].word_fr;
    console.log(this.words);
    console.log(this.word1);
    this.index += 1;
    console.log(this.index);
  }



}


