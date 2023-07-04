import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const fetchRandomNumbers = (): Observable<number> => {
  return new Observable<number>((observer) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);

      observer.next(randomNumber);
      observer.complete();
    }, 2000);
  });
};

const sharedData$ = fetchRandomNumbers().pipe(shareReplay(1));

// Subscribing to the shared data multiple times
sharedData$.subscribe((data) => console.log(`Subscriber 1: ${data}`));
sharedData$.subscribe((data) => console.log(`Subscriber 2: ${data}`));

// Question: How does the shareReplay operator in the above TypeScript snippet improve the efficiency of data fetching and sharing among subscribers?
