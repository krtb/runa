// import React from 'react' => Don't need to import React anymore, it's assumed

import { useState } from "react"


export default function CreateProduct() {

	// Reactive Piece of state => whenever this piece of state changes, it will be updated in the app.
	const [name, setName] = useState('Kurt')

	return (
		<form>
			<label htmlFor="name">
				Name
				<input 
					type="text" 
					id="name" 
					name="name" 
					placeholder="Name"
					value={name}
					onChange={e => {
						setName(e.target.value)
					}}
				/>				
			</label>
		</form>
	)
}
