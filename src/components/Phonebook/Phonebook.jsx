import { Component } from "react";
import { Form } from "components/Form/Form";

import PropTypes from 'prop-types';

export class Phonebook extends Component {

	state = {
		contacts: [],
	}

	getContacts = data => {
		this.setState(prevState => ({
			contacts: [
				...prevState.contacts,
				data,
			]
		}));
	};

	render() {
		const { contacts } = this.state;
		return (
			<>
				<Form getContacts={this.getContacts} />
				{
					contacts.length > 0
					&&
					<>
						<h2>Contacts</h2>
						<ul className="contacts__list">
							{contacts.map(({ value, id }) => <li key={id}>{value}</li>)}
						</ul>
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