import { Component, OnInit, HostListener } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
showWord: any;
showImage: boolean;
selected: number;
isMobile = false;

@HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth <= 576;
  }

  constructor(private router: Router){
  this.showWord = [false, false, false, false, false, false];
  this.showImage = true;
  this.selected = 0;
  }
  ngOnInit(){
    sessionStorage.clear;
    this.onResize({ target: window });
  }

  startGame(game:string){
    let id: any;
    // Looping through the radio buttons and verifying if they are checked.
    // Once the checked one is found, the value (category_id in DB) is saved to the session storage
    // and the right game component gets started and the loop gets stopped
    for (let i = 1; i < 7; i++){
      id = document.getElementById("flexRadioDefault" + i)
      if (id.checked) {
      console.log(id.value)
      sessionStorage.setItem("category", id.value);
      this.router.navigateByUrl(game)
      break   
      }
    } 
  }
  
}

