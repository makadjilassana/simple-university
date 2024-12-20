import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MagasinComponent} from './magasin/magasin.component';
import {ReceptionComponent} from './reception/reception.component';
import {ExpressionBesoinsComponent} from './expression-besoins/expression-besoins.component';
import {BudgetComponent} from './budget/budget.component';
import {MentionsComponent} from './evaluation-personnel/mentions/mentions.component';
import {NotesComponent} from './evaluation-personnel/notes/notes.component';
import {ElementsComponent} from './evaluation-personnel/elements/elements.component';
import {CommandesComponent} from './commandes/commandes.component';
import {ProduitsComponent} from './produits/produits.component';
import {LivraisonsComponent} from './livraisons/livraisons.component';
import {EvolutionsComponent} from './evolutions/evolutions.component';
import {CommandeCreateComponent} from './commandes/commande-create/commande-create.component';
import {CommandeListComponent} from './commandes/commande-list/commande-list.component';
import {ExpressionBesoinCreateComponent} from './expression-besoins/expression-besoin-create/expression-besoin-create.component';
import {ExpressionBesoinListComponent} from './expression-besoins/expression-besoin-list/expression-besoin-list.component';
import {PaiementComponent} from './commandes/paiement/paiement.component';
import {CommandeAffectationComponent} from './commandes/commande-affectation/commande-affectation.component';
import {FournisseurComponent} from './commandes/fournisseur/fournisseur.component';
import {AppelOffreComponent} from './appel-offre/appel-offre.component';
import {PersonnelsComponent} from './mandat/personnels/personnels.component';
import {ProjetsComponent} from './mandat/projets/projets.component';
import {EntiteAdministratifsComponent} from './mandat/entite-administratifs/entite-administratifs.component';
import {ResponsabilitesComponent} from './mandat/responsabilites/responsabilites.component';
import {MandatsComponent} from './mandat/mandats/mandats.component';
import {CompteBudgitaireComponent} from './budget/compte-budgitaire/compte-budgitaire.component';
import {ExplorationComponent} from './budget/Exploration/exploration/exploration.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut
  { path: 'home', component: HomeComponent }, // Route pour 'home'
  {path: 'exepressionbesoins', component: ExpressionBesoinsComponent},
  {path: 'reception', component: ReceptionComponent},
  {path: 'magasin', component: MagasinComponent},

  {path: 'budget', component: BudgetComponent},
  {path: 'budgetFaculte', component: ExplorationComponent},
  {path: 'compteBudgitaire', component: CompteBudgitaireComponent},



  {path: 'appleoffre', component: AppelOffreComponent},

  {path: 'elements', component: ElementsComponent},

  {path: 'mentions', component: MentionsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'commande', component: CommandesComponent},

  {path: 'produit', component: ProduitsComponent},
  {path: 'Livraison', component: LivraisonsComponent},
  {path: 'evolution', component: EvolutionsComponent},

  //commandes

  {path: 'commandeCreate', component: CommandeCreateComponent},
  {path: 'commandeListe', component: CommandeListComponent},
  {path: 'paiement', component: PaiementComponent},
  {path: 'affectation', component: CommandeAffectationComponent},
  {path: 'fournisseur', component: FournisseurComponent},

  //expressionBesoin
  {path: 'expressionBesoinCreate', component: ExpressionBesoinCreateComponent},
  {path: 'expressionBesoinList', component: ExpressionBesoinListComponent},

//mandats
  {path: 'personnelCreate', component: PersonnelsComponent},
  {path: 'projetSousProjetCreate', component: ProjetsComponent},
  {path: 'entiteAdministratifCreate', component: EntiteAdministratifsComponent},
  {path: 'responsabiliteCreate', component: ResponsabilitesComponent},
  {path: 'mandatCreate', component: MandatsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
