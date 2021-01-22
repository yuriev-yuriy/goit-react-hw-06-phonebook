import { connect } from 'react-redux';
import actions from '../redux/actions';

const ContactList = ({ contacts, delMethot }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button onClick={() => delMethot(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  delMethot: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
