import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LidwoordenComponent } from './lidwoorden/lidwoorden.component';
import { MeerkeuzeComponent } from './meerkeuze/meerkeuze.component';
import { WoordflitserComponent } from './woordflitser/woordflitser.component';
import { ResultaatComponent } from './resultaat/resultaat.component';

@NgModule({
  declarations: [
    AppComponent,
    LidwoordenComponent,
    MeerkeuzeComponent,
    WoordflitserComponent,
    ResultaatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
