import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  /*
   * above getheroes is synchronous
   * If getHeroes() can't return immediately with hero data, it shouldn't be synchronous, 
   * because that would block the browser as it waits to return data.
   * HeroService.getHeroes() must have an asynchronous signature of some kind.
   * because, data getting from the fetch/http request takes time and when the
   * data is ready only then the value should be returned 
   * to make it asynchronous kind of lets return an observable 
   * so subscribers get the value upon emitting.
   */

  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id:any) : Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((h)=>h.id==id))

  }
}
