import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const observable = of('Hello', 'World', 'Goodbye', 'World').pipe(
  catchError(() => of('An error occurred!'))
);

observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log(`Error: ${err}`),
  complete: () => console.log('Completed'),
});

// Question: What is the role of catchError operator in this RxJS snippet?
