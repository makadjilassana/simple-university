import { Component, OnInit } from '@angular/core';
import {EntiteAdministratifService} from '../../../controller/service/entite-administratif.service';
import {ProjetService} from '../../../controller/service/projet.service';



@Component({
  selector: 'app-create-entite-administratif',
  templateUrl: './create-entite-administratif.component.html',
  styleUrls: ['./create-entite-administratif.component.css']
})
export class CreateEntiteAdministratifComponent implements OnInit {

  constructor(public entiteAdministratifService: EntiteAdministratifService,public projetService:ProjetService) { }

  ngOnInit() {
    this.entiteAdministratifService.findAll();
    this.entiteAdministratifService.findallSousProjets();
    this.entiteAdministratifService.findallTypeEntite();
    this.entiteAdministratifService.findallEntite();
  }

  public get entiteAdministratif(){
    return this.entiteAdministratifService.createEntiteAdministratif;
  }
  public addEntiteAdministratif(){
    this.entiteAdministratifService.addEntiteAdministratif();
  }
  public saveEntiteAdministratif(){
    this.entiteAdministratifService.saveEntiteAdministratif();
  }

  public get entiteAdministratifs(){
    return this.entiteAdministratifService.listEntiteAdministratifs;
  }
  public get sousProjets() {
    return this.projetService.projetCreate.sousProjetsVo;
  }

  public get listSousProjet(){
    return this.entiteAdministratifService._sousProjetss;
  }

  public get listTypeEntite(){
    return this.entiteAdministratifService._typeEntiteAdmin;
  }

  public deleteEntite(e){
    this.entiteAdministratifService.deleteEntite(e);
  }

  public get listEntites(){
    return this.entiteAdministratifService._listEntiteAdministratifs;
  }

  public rechercheEntite(){
    return this.entiteAdministratifService.rechercheEntite();
  }
  public get entiteRecherche(){
    return this.entiteAdministratifService.entiteSearch;
  }

}

