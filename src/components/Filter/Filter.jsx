export const Filter = ({ handlerFilter, value }) => {
	return (
		<>
			<p>Find contacts by name</p>
			<input
				type="text"
				value={value}
				onChange={handlerFilter}
			/>
		</>
	)
}