import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,private http:HttpClient) { }
  Url = "https://localhost:7156/api/hero";

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
  getHeroes(): Observable<any> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get(this.Url);
    //return of(HEROES);
  }

  getHero(id:any) : Observable<any> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get(this.Url+"/"+ +id);

  }

  AddHero(hero:Hero){
    return this.http.post(this.Url, hero,
      {headers: new HttpHeaders({'Content-Type':'application/json'}) }
    );
  }

  UpdateHero(hero:Hero){
    return  this.http.put(this.Url, hero,
      {headers: new HttpHeaders({'Content-Type':'application/json'}) }
    );
  }

  DeleteHero(id:number){
   return  this.http.delete(this.Url+ "/"+id);
    
  }


}
