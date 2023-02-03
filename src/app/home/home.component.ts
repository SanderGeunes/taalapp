import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router){
  
  }
  ngOnInit(){
    sessionStorage.clear
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

