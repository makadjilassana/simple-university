import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExpressionBesoinsComponent} from './expression-besoins/expression-besoins.component';
import {ExpressionBesoinCreateComponent} from './expression-besoins/expression-besoin-create/expression-besoin-create.component';
import {ExpressionBesoinListComponent} from './expression-besoins/expression-besoin-list/expression-besoin-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './layouts/header/header.component';
import {ReceptionComponent} from './reception/reception.component';
import {ReceptionCreateComponent} from './reception/reception-create/reception-create.component';
import {ReceptionListComponent} from './reception/reception-list/reception-list.component';
import {MagasinComponent} from './magasin/magasin.component';
import {MagasinCreateComponent} from './magasin/magasin-create/magasin-create.component';
import {StockListComponent} from './magasin/stock-list/stock-list.component';
import {StockUpdateComponent} from './magasin/stock-update/stock-update.component';
import {BudgetComponent} from './budget/budget.component';
import {BudgetSousProjetComponent} from './budget/Opperation/budget-sous-projet/budget-sous-projet.component';
import {BudgetProjetComponent} from './budget/Opperation/budget-projet/budget-projet.component';
import {BudgetCompteBudgitaireComponent} from './budget/Opperation/budget-compte-budgitaire/budget-compte-budgitaire.component';
import {ConfirmationComponent} from './budget/Opperation/confirmation/confirmation.component';
import {BudgetFaculteComponent} from './budget/Opperation/budget-faculte/budget-faculte.component';
import {EvaluationPersonnelComponent} from './evaluation-personnel/evaluation-personnel.component';
import {EvaluationNavbarComponent} from './evaluation-personnel/evaluation-navbar/evaluation-navbar.component';
import {ElementsComponent} from './evaluation-personnel/elements/elements.component';
import {ElementListComponent} from './evaluation-personnel/elements/element-list/element-list.component';
import {ElementCreateComponent} from './evaluation-personnel/elements/element-create/element-create.component';
import {MentionsComponent} from './evaluation-personnel/mentions/mentions.component';
import {MentionCreateComponent} from './evaluation-personnel/mentions/mention-create/mention-create.component';
import {MentionListComponent} from './evaluation-personnel/mentions/mention-list/mention-list.component';
import {NotesComponent} from './evaluation-personnel/notes/notes.component';
import {NoteCreateComponent} from './evaluation-personnel/notes/note-create/note-create.component';
import {NoteListComponent} from './evaluation-personnel/notes/note-list/note-list.component';
import {CommandesComponent} from './commandes/commandes.component';
import {CommandeCreateComponent} from './commandes/commande-create/commande-create.component';
import {CommandeListComponent} from './commandes/commande-list/commande-list.component';

import {ProduitCreateComponent} from './produits/produit-create/produit-create.component';
import {CategorieTypeCreateComponent} from './produits/categorie-type-create/categorie-type-create.component';
import {TypeCreateComponent} from './produits/type-create/type-create.component';
import {ProduitsComponent} from './produits/produits.component';
import {LivraisonsComponent} from './livraisons/livraisons.component';
import {LivraisonListComponent} from './livraisons/livraison-list/livraison-list.component';
import {EvolutionsPersonnelComponent} from './evolutions/evolutions-personnel/evolutions-personnel.component';
import {EvolutionPersonnelCreateComponent} from './evolutions/evolutions-personnel/evolution-personnel-create/evolution-personnel-create.component';
import {EvolutionPersonnelListComponent} from './evolutions/evolutions-personnel/evolution-personnel-list/evolution-personnel-list.component';
import {EchelleCreateComponent} from './evolutions/echelles/echelle-create/echelle-create.component';
import {EchelleListComponent} from './evolutions/echelles/echelle-list/echelle-list.component';
import {EchellesComponent} from './evolutions/echelles/echelles.component';
import {EchelonListComponent} from './evolutions/echelons/echelon-list/echelon-list.component';
import {EchelonCreateComponent} from './evolutions/echelons/echelon-create/echelon-create.component';
import {EvolutionsComponent} from './evolutions/evolutions.component';
import {EchelonComponent} from './evolutions/echelons/echelon.component';
import {LoiEvolutionListComponent} from './evolutions/lois-evolution/loi-evolution-list/loi-evolution-list.component';
import {LoisEvolutionComponent} from './evolutions/lois-evolution/lois-evolution.component';
import {LoiEvolutionCreateComponent} from './evolutions/lois-evolution/loi-evolution-create/loi-evolution-create.component';
import {LoiEvolutionTypePersonnelCreateComponent} from './evolutions/lois-evolution/loi-evolution-type-personnel-create/loi-evolution-type-personnel-create.component';
import {LoiEvolutionTypePersonnelListComponent} from './evolutions/lois-evolution/loi-evolution-type-personnel-list/loi-evolution-type-personnel-list.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ExpressionBesoinItemManipComponent} from './expression-besoins/expression-besoin-item-manip/expression-besoin-item-manip.component';
import {DetaillesComponent} from './budget/Opperation/detailles/detailles.component';
import {DatePipe} from '@angular/common';
import {PaiementComponent} from './commandes/paiement/paiement.component';
import {PaiemmentModalComponent} from './commandes/paiemment-modal/paiemment-modal.component';
import {LivraisonDetailleComponent} from './livraisons/livraison-detaille/livraison-detaille.component';
import {LivraisonGlobaleComponent} from './livraisons/livraison-globale/livraison-globale.component';
import {MagasinCreateCreateComponent} from './magasin/magasin-create/magasin-create-create/magasin-create-create.component';
import {MagasinCreateListeComponent} from './magasin/magasin-create/magasin-create-liste/magasin-create-liste.component';
import {CommandeAffectationComponent} from './commandes/commande-affectation/commande-affectation.component';
import {MagasinUpdateComponent} from './magasin/magasin-update/magasin-update.component';
import {StockGlobalListComponent} from './magasin/stock-global-list/stock-global-list.component';
import {FournisseurComponent} from './commandes/fournisseur/fournisseur.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {AppelOffreComponent} from './appel-offre/appel-offre.component';
import {OffresListComponent} from './appel-offre/offres/offres-list/offres-list.component';
import {OffresCreateComponent} from './appel-offre/offres/offres-create/offres-create.component';
import {OffresComponent} from './appel-offre/offres/offres.component';
import {AppelOffresComponent} from './appel-offre/appel-offres/appel-offres.component';
import {AppelOffreCreateComponent} from './appel-offre/appel-offres/appel-offre-create/appel-offre-create.component';
import {AppelOffreListeComponent} from './appel-offre/appel-offres/appel-offre-liste/appel-offre-liste.component';
import {BudgetFaculteCreateComponent} from './budget/Opperation/budget-faculte-create/budget-faculte-create.component';
import {BudgetProjetCreateComponent} from './budget/Opperation/budget-projet-create/budget-projet-create.component';
import {BudgetSousProjetCreateComponent} from './budget/Opperation/budget-sous-projet-create/budget-sous-projet-create.component';
import {BudgetCompteBudgitaireCreateComponent} from './budget/Opperation/budget-compte-budgitaire-create/budget-compte-budgitaire-create.component';
import {BudgetDetailComponent} from './budget/Opperation/budget-detail/budget-detail.component';
import {ProjetsComponent} from './mandat/projets/projets.component';
import {ProjetCreateComponent} from './mandat/projets/projet-create/projet-create.component';
import {SousProjetListComponent} from './mandat/projets/sous-projet-list/sous-projet-list.component';
import {PersonnelsComponent} from './mandat/personnels/personnels.component';
import {PersonnelCreateComponent} from './mandat/personnels/personnel-create/personnel-create.component';
import {TypePersonnelComponent} from './mandat/personnels/type-personnel/type-personnel.component';
import {ResponsabilitesComponent} from './mandat/responsabilites/responsabilites.component';
import {CreateResponsabiliteComponent} from './mandat/responsabilites/create-responsabilite/create-responsabilite.component';
import {ListResponsabiliteComponent} from './mandat/responsabilites/list-responsabilite/list-responsabilite.component';
import {EntiteAdministratifsComponent} from './mandat/entite-administratifs/entite-administratifs.component';
import {ListEntiteAdministartifComponent} from './mandat/entite-administratifs/list-entite-administartif/list-entite-administartif.component';
import {CreateEntiteAdministratifComponent} from './mandat/entite-administratifs/create-entite-administratif/create-entite-administratif.component';
import {MandatsComponent} from './mandat/mandats/mandats.component';
import {MandatCreateComponent} from './mandat/mandats/mandat-create/mandat-create.component';
import {MandatListComponent} from './mandat/mandats/mandat-list/mandat-list.component';
import {MandatComponent} from './mandat/mandat.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatDialogModule, MatInputModule} from '@angular/material';
import { CompteBudgitaireComponent } from './budget/compte-budgitaire/compte-budgitaire.component';
import { BudgetFaculteExplorationComponent } from './budget/Exploration/budget-faculte-exploration/budget-faculte-exploration.component';
import { BudgetProjetExplorationComponent } from './budget/Exploration/budget-projet-exploration/budget-projet-exploration.component';
import { BudgetSousProjetExplorationComponent } from './budget/Exploration/budget-sous-projet-exploration/budget-sous-projet-exploration.component';
import { BudgetExplorationComponent } from './budget/Exploration/budget-exploration/budget-exploration.component';
import { ExplorationComponent } from './budget/Exploration/exploration/exploration.component';
import { DetailsOffresComponent } from './appel-offre/offres/details-offres/details-offres.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppelOffresComponent,
    AppelOffreCreateComponent,
    AppelOffreListeComponent,
    OffresComponent,
    OffresCreateComponent,
    OffresListComponent,
    AppelOffreComponent,
    HeaderComponent,
    ExpressionBesoinsComponent,
    ExpressionBesoinCreateComponent,
    ExpressionBesoinListComponent,
    ExpressionBesoinItemManipComponent,
    ReceptionComponent,
    ReceptionCreateComponent,
    ReceptionListComponent,
    MagasinComponent,
    MagasinCreateComponent,
    StockUpdateComponent,
    StockListComponent,
    BudgetComponent,
    BudgetFaculteComponent,
    BudgetSousProjetComponent,
    BudgetProjetComponent,
    BudgetCompteBudgitaireComponent,
    ConfirmationComponent,
    DetaillesComponent,
    EvaluationPersonnelComponent,
    ElementCreateComponent,
    ElementListComponent,
    ProduitCreateComponent,
    CategorieTypeCreateComponent,
    TypeCreateComponent,
    ProduitsComponent,
    LivraisonsComponent,

    LivraisonListComponent,
    /*Evolution components*/
    EvolutionsPersonnelComponent,
    EvolutionPersonnelCreateComponent,
    EvolutionPersonnelListComponent,
    EchelleCreateComponent,
    EchelleListComponent,
    EchellesComponent,
    EchelonListComponent,
    EchelonCreateComponent,
    EchelonComponent,
    EvolutionsComponent,
    LoiEvolutionListComponent,
    LoisEvolutionComponent,
    LoiEvolutionCreateComponent,
    LoiEvolutionTypePersonnelCreateComponent,
    LoiEvolutionTypePersonnelListComponent,
    /*Evaluation components*/
    EvaluationNavbarComponent,
    ElementsComponent,
    MentionsComponent,
    MentionCreateComponent,
    MentionListComponent,
    NotesComponent,
    NoteCreateComponent,
    NoteListComponent,
    CommandesComponent,
    CommandeCreateComponent,
    CommandeListComponent,
    PaiementComponent,
    PaiemmentModalComponent,
    LivraisonDetailleComponent,
    LivraisonGlobaleComponent,
    MagasinCreateCreateComponent,
    MagasinCreateListeComponent,
    CommandeAffectationComponent,
    MagasinUpdateComponent,
    StockGlobalListComponent,
    FournisseurComponent,
    FooterComponent,
    BudgetFaculteCreateComponent,
    BudgetProjetCreateComponent,
    BudgetSousProjetCreateComponent,
    BudgetCompteBudgitaireCreateComponent,
    BudgetDetailComponent,
    ProjetsComponent,
    ProjetCreateComponent,
    SousProjetListComponent,
    PersonnelsComponent,
    PersonnelCreateComponent,
    TypePersonnelComponent,
    ResponsabilitesComponent,
    CreateResponsabiliteComponent,
    ListResponsabiliteComponent,
    EntiteAdministratifsComponent,
    ListEntiteAdministartifComponent,
    CreateEntiteAdministratifComponent,
    MandatsComponent,
    MandatCreateComponent,
    MandatListComponent,
    MandatComponent,
    CompteBudgitaireComponent,
    BudgetFaculteExplorationComponent,
    BudgetProjetExplorationComponent,
    BudgetSousProjetExplorationComponent,
    BudgetExplorationComponent,
    ExplorationComponent,
    DetailsOffresComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatDialogModule
],

  entryComponents: [
    BudgetCompteBudgitaireCreateComponent,
    BudgetExplorationComponent,
    DetailsOffresComponent,
    BudgetExplorationComponent,
    BudgetCompteBudgitaireComponent,
    BudgetFaculteComponent,
    BudgetProjetComponent,
    BudgetSousProjetComponent
],
  providers: [DatePipe,BudgetExplorationComponent,
    BudgetCompteBudgitaireComponent,
    BudgetProjetComponent,
    BudgetSousProjetComponent,
    DetailsOffresComponent
  ],

  bootstrap: [AppComponent],

})
export class AppModule {
}
