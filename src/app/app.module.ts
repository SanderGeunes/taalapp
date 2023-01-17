import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LidwoordenComponent } from './lidwoorden/lidwoorden.component';
import { MeerkeuzeComponent } from './meerkeuze/meerkeuze.component';
import { WoordflitserComponent } from './woordflitser/woordflitser.component';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'Lidwoorden', component: LidwoordenComponent},
  {path: 'Meerkeuze', component: MeerkeuzeComponent},
  {path: 'Woordflitser', component: WoordflitserComponent},
  {path: 'Resultaat', component: ResultaatComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LidwoordenComponent,
    MeerkeuzeComponent,
    WoordflitserComponent,
    ResultaatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
