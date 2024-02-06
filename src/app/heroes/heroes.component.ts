import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [FormsModule, UpperCasePipe, CommonModule, HeroDetailComponent,RouterModule]
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService, private messageService: MessageService) { }
  heroes:Hero[]=[]

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    //           or
    //  this.heroService.getHeroes().subscribe({
    //   next : (heroes) => this.heroes = heroes
    //   });
  }

  //we used to send the selectedhero to the hero-detail component instead 
  // we can simply use routerlink upon clicking every hero in html
  // selectedHero? :Hero;
  // clickedHero(hero:Hero)
  // {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
}
