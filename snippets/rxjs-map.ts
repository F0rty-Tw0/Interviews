import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5);

const squareValues = numbers.pipe(map((number: number) => number * number));

squareValues.subscribe((number) => console.log(number));

// Question: Explain how the map operator is used in this RxJS snippet.
