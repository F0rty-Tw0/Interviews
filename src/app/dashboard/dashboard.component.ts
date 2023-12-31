import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private heroService: HeroService) {}

  heroes$ = this.heroService
    .getHeroes()
    .pipe(map((heroes) => heroes.slice(1, 5)));
}

