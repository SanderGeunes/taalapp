import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent {
  ngOnInit(){
    this.score = sessionStorage.getItem("score");
  }
score: any;  
}
