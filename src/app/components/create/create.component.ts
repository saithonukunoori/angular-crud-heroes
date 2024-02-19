import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { CommonModule } from '@angular/common';
import { Hero } from '../../hero';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private herosevice:HeroService){}
isHeroAdded:boolean = false;
addHero(temphero:Hero) {
  this.herosevice.AddHero(temphero).subscribe(
    (res)=>{
      this.isHeroAdded=true;
    },
    (err)=>{
      console.log("something error occured");
    }
  );
}
newHero() {
 this.isHeroAdded=false;
}

}
