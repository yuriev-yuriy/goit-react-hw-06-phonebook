import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phoneBook/Add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction('phoneBook/Delete');
const changeFilter = createAction('phoneBook/Filter');

// const addContact = (name, number) => ({
//   type: types.Add,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (id) => ({
//   type: types.Delete,
//   payload: id,
// })

// const changeFilter = (value) => ({
//   type: types.Filter,
//   payload: value,
// })

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
