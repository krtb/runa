// import React from 'react' => Don't need to import React anymore, it's assumed

export default function CreateProduct() {
	return (
		<form>
			<label htmlFor="name">
				Name
				<input type="text" id="name" name="name" placeholder="Name" />				
			</label>
		</form>
	)
}
