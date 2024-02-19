import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, UpperCasePipe } from '@angular/common';
import {HEROES} from '../../mock-heroes';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    imports: [FormsModule, UpperCasePipe, CommonModule, HeroDetailComponent,RouterModule]
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService, private messageService: MessageService, private route:Router) { }
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
  deleteHero(id:number){
    this.heroService.DeleteHero(id).subscribe(
      (res)=>{
        console.log("deleted succesfully");
        this.getHeroes();
      },      
        (err) =>{
          console.error(err);
          
        }
    )
  }
}
