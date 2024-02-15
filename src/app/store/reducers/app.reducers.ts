import { createReducer, on } from '@ngrx/store';
import { initialCounterState } from "../state/app.state";
import { decrement, increment, reset } from "../actions/app.actions";

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state => ({ ...state, count: state.count - 1 })),
  on(reset, state => initialCounterState)
);
