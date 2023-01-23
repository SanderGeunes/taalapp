import { Component } from '@angular/core';
import { WordsService } from '../words.service';
@Component({
  selector: 'app-meerkeuze',
  templateUrl: './meerkeuze.component.html',
  styleUrls: ['./meerkeuze.component.css']
})
export class MeerkeuzeComponent {
  title = 'service';
  constructor(private wordService: WordsService) {}
  ngOnInit() {
    this.wordService.getWords(1).then(data => console.log(data));
  }
}
