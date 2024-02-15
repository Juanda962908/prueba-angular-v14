import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { CounterState } from "./store/state/app.state";
import { increment, decrement, reset } from './store/actions/app.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'crud-app';
   count: number = 0

  constructor(private store: Store<{ counter: CounterState }>) {
    this.store.select('counter').subscribe(state => {
      this.count = state.count;
    });
  }



  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
