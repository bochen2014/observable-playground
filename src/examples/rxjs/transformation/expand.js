export default
`const { rxObserver } = require('api/v0.3');
const { of, timer, EMPTY } = require('rxjs');
const { expand, mapTo } = require('rxjs/operators');

of(1).pipe(
    expand(value =>
      value < 5
      ? timer(5).pipe(mapTo(++value))
      : EMPTY
    )
  )
  .subscribe(rxObserver());
`