import { Component } from '@angular/core';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}

  heroes$ = this.getHeroes$();

  getHeroes$(): Observable<Hero[]> {
    return this.heroService.getHeroes().pipe(shareReplay(1));
  }

  add(name: string): void {
    if (!name) {
      return;
    }

    name = name.trim().toUpperCase();

    this.heroes$
      .pipe(
        switchMap((heroes) => {
          const hero: Hero = { name, id: heroes.length + 1 };

          heroes.push(hero);

          return this.heroService.addHero(hero).pipe(map(() => heroes));
        }),
        tap(() => {
          this.heroes$ = this.getHeroes$();
        }),
        take(1)
      )
      .subscribe();
  }

  delete(hero: Hero): void {
    this.heroes$
      .pipe(
        switchMap(() => {
          return this.heroService.deleteHero(hero.id).pipe(
            tap(() => {
              this.heroes$ = this.getHeroes$();
            })
          );
        }),
        take(1)
      )
      .subscribe();
  }
}

