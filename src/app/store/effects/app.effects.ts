import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { increment } from "../actions/app.actions";

@Injectable()
export class CounterEffects {

  increment$ = createEffect(() =>
      this.actions$.pipe(
        ofType(increment),
        tap(() => console.log('Increment effect triggered'))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
