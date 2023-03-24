import css from "./ContactList.module.css";

export const ContactList = ({ list }) => {
	return (
		<ul className={css.contacts__list}>
			{list.map(({ name, id, number }) => <li key={id}>{name}: {number}</li>)}
		</ul>
	)
}