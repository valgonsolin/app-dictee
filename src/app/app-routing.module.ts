import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicteeComponent } from './dictee/dictee.component';
import { ProgressionComponent } from './progression/progression.component';
import { GrammaireComponent } from './grammaire/grammaire.component';
import { VocabulaireComponent } from './vocabulaire/vocabulaire.component';
import { CultureGeneraleComponent } from './culture-generale/culture-generale.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  { path: 'dictee', component: DicteeComponent },
  { path: 'progression', component: ProgressionComponent },
  { path: 'grammaire', component: GrammaireComponent },
  { path: 'vocabulaire', component: VocabulaireComponent },
  { path: 'culturegenerale', component: CultureGeneraleComponent },
  { path: 'abonnement', component: AbonnementComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
