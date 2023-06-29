import { Component } from '@angular/core';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  constructor(private heroService: HeroService) {}

  heroes$ = this.getHeroes$();

  getHeroes$(): Observable<Hero[]> {
    return this.heroService.getHeroes().pipe(shareReplay(1));
  }
}

