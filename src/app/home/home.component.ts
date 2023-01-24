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

