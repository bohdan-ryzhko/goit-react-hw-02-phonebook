import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";

import PropTypes from 'prop-types';
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export class Phonebook extends Component {

	static isRepeat = false

	state = {
		contacts: [],
		filter: "",
	}

	handlerFilter = ({ target: { value } }) => {
		this.setState({
			filter: value,
		});
	}

	getContacts = data => {
		const { name } = data;

		this.state.contacts.forEach(contact => {
			if (contact.name === name) {
				this.isRepeat = true;
				alert(`${name} is already in contacts`);
			}
		});

		if (this.isRepeat) {
			this.isRepeat = false;
			return;
		} 

		this.setState(prevState => ({
			contacts: [
				...prevState.contacts,
				data,
			]
		}));
	};

	getFilteredContacts = () => {
		const { contacts, filter } = this.state;
		const normalizeFilter = filter.toLowerCase();
		return contacts.filter(({ name }) =>
			name.toLowerCase().includes(normalizeFilter));
	}

	removeContact = ({ target }) => {
		this.setState(({ contacts }) => ({
			contacts: contacts.filter(({ id }) => id !== target.id)
		}))
	}

	render() {
		const { contacts, name } = this.state;

		const filteredContacts = this.getFilteredContacts();

		return (
			<>
				<h1>Phonebook</h1>
				<ContactForm getContacts={this.getContacts} />
				{
					contacts.length > 0
					&&
					<>
						<h2>Contacts</h2>
						<Filter value={name} handlerFilter={this.handlerFilter} />
						<ContactList list={filteredContacts} removeContact={this.removeContact} />
					</>
				}
			</>
		)
	}
}

Phonebook.propTypes = {
	contactsList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}))
}