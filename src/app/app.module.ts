import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LidwoordenComponent } from './lidwoorden/lidwoorden.component';
import { MeerkeuzeComponent } from './meerkeuze/meerkeuze.component';
import { WoordflitserComponent } from './woordflitser/woordflitser.component';
import { ResultaatComponent } from './resultaat/resultaat.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lidwoorden', component: LidwoordenComponent},
  {path: 'meerkeuze', component: MeerkeuzeComponent},
  {path: 'woordflitser', component: WoordflitserComponent},
  {path: 'resultaat', component: ResultaatComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LidwoordenComponent,
    MeerkeuzeComponent,
    WoordflitserComponent,
    ResultaatComponent    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
