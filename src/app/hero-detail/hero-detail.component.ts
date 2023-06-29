import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, take, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  heroName = new FormControl('');

  hero_id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  hero$ = this.heroService.getHero(this.hero_id).pipe(
    map((hero) => {
      if (this.heroName.value) {
        hero.name = this.heroName.value;
      }
      this.heroName.setValue(hero.name);

      return hero;
    })
  );

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.hero$
      .pipe(
        switchMap((hero) => this.heroService.updateHero(hero)),
        take(1)
      )
      .subscribe(() => this.goBack());
  }
}

