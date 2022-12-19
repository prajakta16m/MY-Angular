import { Component, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  myObservable$ = interval(1000);
  mapObservable$ = map((n: number) => {return n*n;});
  counts = [];
  data$: Observable<any>;

  ngOnInit(): void {

    const mySubscriber = this.mapObservable$(of(1,2,3)).subscribe(
        (n) => {
          this.counts.push(n);
        }
    );
    
    this.data$ = this.mapObservable$(of(20));

    setTimeout( () => {
      this.counts.push('observer stops.');
      mySubscriber.unsubscribe();
    },10000);
  }

}
