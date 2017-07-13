import { ActionReducer, Action } from '@ngrx/store';
import { Phone } from './../services/phone.interfaces';

export const UPDATE = 'UPDATE';

export function phonesReducer(state: Phone[] = [], action: Action) {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}
