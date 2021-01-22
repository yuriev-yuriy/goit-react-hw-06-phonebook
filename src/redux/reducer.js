import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

console.log(actions);

const contacts = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [actions.addContact]: (state, action) => [action.payload, ...state],
    [actions.deleteContact]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
);

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const contacts = (state = [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
// ], {type, payload}) => {
//     switch (type) {
//         case types.Add:
//             return [payload, ...state]

//         case types.Delete:
//             return state.filter(({id}) => id !== payload)

//         default:
//            return state;
//     }
// }

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.Filter:
//             return payload;
//         default:
//             return state;
//     }
// }

export default combineReducers({
  contacts,
  filter,
});
