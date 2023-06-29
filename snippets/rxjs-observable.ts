import { Observable } from 'rxjs';

const myObservable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
});

myObservable.subscribe((value) => console.log(value));

// Question: Explain the creation of an Observable in this RxJS snippet.
