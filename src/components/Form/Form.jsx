import css from "./Form.module.css";
import { Component } from "react";
import { nanoid } from 'nanoid/non-secure';

import PropTypes from 'prop-types';

export class Form extends Component {

	state = {
		name: ''
	}

	submitForm = event => {
		event.preventDefault();

		const { name: { name, value, id } } = event.target;

		this.setState({ [name]: value });

		this.props.getContacts({ value, id });

		this.reset();
	}

	handleInput = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	}

	reset = () => {
		this.setState({ name: '' });
	}

	render() {
		const nameId = nanoid();
		return (
			<form className={css.form} onSubmit={this.submitForm}>
				<label className={css.label} htmlFor={nameId}>
					Name
					<input
						value={this.state.name}
						onChange={this.handleInput}
						className={css.input}
						id={nameId}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</label>
			<button className={css.btnSubmit} type="submit">Add contact</button>
		</form>
		)
	}
}

Form.propTypes = {
	name: PropTypes.string,
}