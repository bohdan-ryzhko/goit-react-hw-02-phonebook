import css from "./ContactList.module.css";
import PropTypes from 'prop-types';

export const ContactList = ({ list }) => {
	return (
		<ul className={css.contacts__list}>
			{list.map(({ name, id, number }) => <li key={id}>{name}: {number}</li>)}
		</ul>
	)
}

ContactList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
	}))
}