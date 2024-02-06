import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap, Router, RouterLink, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,CommonModule,RouterLink,RouterModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  
  // @Input()
  hero?: Hero;
  id:number=0;

  constructor(private route:ActivatedRoute,private heroService:HeroService,
              private router:Router
             ){}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    this.route.paramMap
    .subscribe((params:ParamMap)=>{
    this.id =Number( params.get("id"));
    this.heroService.getHero(this.id)
      .subscribe((hero) => {this.hero = hero});
  });
}
  goBack(): void {
    //this.location.back();
    this.router.navigate(['../']);
  }
}


