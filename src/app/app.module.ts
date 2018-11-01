import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DicteeComponent } from './dictee/dictee.component';
import { ProgressionComponent } from './progression/progression.component';
import { GrammaireComponent } from './grammaire/grammaire.component';
import { VocabulaireComponent } from './vocabulaire/vocabulaire.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CultureGeneraleComponent } from './culture-generale/culture-generale.component';
import { AbonnementComponent } from './abonnement/abonnement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DicteeComponent,
    ProgressionComponent,
    GrammaireComponent,
    VocabulaireComponent,
    ConnexionComponent,
    CultureGeneraleComponent,
    AbonnementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
