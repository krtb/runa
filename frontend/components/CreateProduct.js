// import { useState } from "react"; => using custom useForm webhook, instead of useState
import useForm from "../lib/useForm";
import Form from "./styles/Form"

export default function createProduct(){

	// destructuring inputs
	const {inputs, handleChange, clearForm, resetForm} = useForm({
		name: "bag",
		price: 100,
		description: "this is a sweet bag!"
	});

	return(
		<Form>
			<label htmlFor="name">
				Name 
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					value={inputs.name}
					onChange={handleChange}
				/>

				
			</label>

			<label htmlFor="price">
				Price 
				<input
					type="number"
					id="price"
					name="price"
					placeholder="price"
					value={inputs.price}
					onChange={handleChange}
				/>
			</label>

			<button type="button" >
				+ Add Product
			</button>

			{/* <button type="button" onClick={clearForm}>
				Clear Form
			</button>

			<button type="button" onClick={resetForm}>
				Reset Form
			</button> */}
		</Form>
	)                          
}