import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(1000);
const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe((interval) => console.log('Next: ', interval));

// Question: What is the purpose of the take operator in this RxJS snippet?
