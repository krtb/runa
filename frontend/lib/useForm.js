import {useState} from 'react';

export default function useForm(initialState={ }){
	const[inputs, setInputs] = useState(initialState)

	// will return an object which handles multiple pieces of state


	function handleChange(e) {
		let { value, name, type } = e.target

		// Was being passed in as a string
		if (type === 'number') {
			value = parseInt(value)
		}

		if (type === 'file') {
			// for handling uploading files
			// when working with files, you need to set the first item in the array to be the files
			value[0] = e.target.files;
		}

		setInputs({
			// create copy of state with the spread operator    
			...inputs,
			[name]: value
		})

	}

	function resetForm() {
		setInputs(initialState)
	}

	function clearForm() {
		// turn into a string, then turn back into an object
		const blankstate = Object.fromEntries(Object.entries(inputs).map(([key,value]) =>
			//reset value to be empty
			[key, '']
		))
		setInputs(blankstate)
	}
	
	// return the data that we want to surface with this custom webhook
	return{
		inputs,
		handleChange,
		resetForm,
		clearForm
	}
}