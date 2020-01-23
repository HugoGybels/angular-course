import {Component, OnInit} from '@angular/core';
import {from, interval, Observable, of} from 'rxjs';
import {concatMap, debounceTime, delay, filter, map, reduce, scan, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const counter = interval(1000);
    let tabObserveur: Observable<number> = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    tabObserveur = tabObserveur.pipe(
      tap(i => i * 10),
      // map(i => i * 10),
      // filter( i => i % 2 === 1),
      // reduce((a, b) => a + b),
      // scan((a, b) => a + b),
      // debounceTime(1000)
      // concatMap( item => of(item).pipe( delay( 1000 ) ))
    );



    // const subscription = counter.subscribe(data => console.log(data));
    // setTimeout(() => subscription.unsubscribe(), 5000);
    // setTimeout(() => counter.subscribe(data => console.log(data)), 10000);
  }
}
