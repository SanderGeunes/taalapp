import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent {
  score: any;
  roundedScore: any;
  failed: boolean;
  passed: boolean;
  cumLaude: boolean;
  cumMagnaLaude: boolean;
  summaCumLaude: boolean;

  constructor(private router: Router){
    this.failed = false;
    this.passed = false;
    this.cumLaude = false;
    this.cumMagnaLaude = false;
    this.summaCumLaude = false;
  }
  
  ngOnInit(){
    // retrieve score from session storage
    this.score = parseFloat(sessionStorage.getItem("score"));
    // round score up to 2 decimals after comma and multiply by 100 to show percentage
    this.roundedScore = Math.round(this.score * 100);
    // if-loop to determine which image to show
    if (this.roundedScore < 50){
      this.failed = true;
    } else if (50 < this.roundedScore && this.roundedScore < 68){
      this.passed = true;
    } else if (68 < this.roundedScore && this.roundedScore < 77){
      this.cumLaude = true;
    } else if (77 < this.roundedScore && this.roundedScore < 100){
      this.cumMagnaLaude = true;
    } else if (this.roundedScore === 100){
      this.summaCumLaude = true;
    }

  }
 navigateToHome(){
  this.router.navigateByUrl('home')
 }
}
