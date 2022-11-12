import { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'


type Fields = {
	title: string
	companyName: string
	joiningDate: string
	currentStatus: string
	jobLocation: string
	logoBackgroundColor: string
}
type TempObj = {
	[name: string]: string
}

const inputItems = [
	{ label: 'Job Title', placeholder: 'MERN Stack Developer', type: 'text', name: 'title' },
	{ label: 'Company Name', placeholder: 'Pixel Studio', type: 'text', name: 'companyName' },
	{ label: 'Joining Date', placeholder: '08-03-1995', type: 'date', name: 'joiningDate' },
	{ label: 'Current Status', placeholder: 'active', type: 'text', name: 'currentStatus' },
	{ label: 'Job Location', placeholder: 'Dhata, Bangladesh', type: 'text', name: 'jobLocation' },
	{ label: 'Logo Color', placeholder: 'red', type: 'color', name: 'logoBackgroundColor' },
]

let initialFieldsState: Fields= {
	title: '',
	companyName: '',
	joiningDate: '',
	currentStatus: '',
	jobLocation: '',
	logoBackgroundColor: ''
}

const isFormValid = <T extends { }>(fields: T, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>) => {
	const tempObj: TempObj = {}

	Object.keys(fields).forEach(field => {
		if(!fields[field as keyof T]) tempObj[field] = `'${field}' is emapty`
	})
	setFieldsError(tempObj)

	return Object.values(tempObj).every( item => item == '' )
}

export const AddExperience = () => {
	const [ fields, setFields ] = useState<Fields>(initialFieldsState)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialFieldsState)

	const changeHandler = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [name]: evt.target.value })
	}

	const autoCompleteChangeHandler = (value: string | null) => {
		if(!value) return

		setFields({ ...fields, currentStatus: value })
	}

	const resetHandler = () => {
		setFields(initialFieldsState)
		setFieldsError(initialFieldsState)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		if( !isFormValid(fields, setFieldsError) ) return
		resetHandler()

		console.log(fields)
	}

	return (
		<form onSubmit={submitHandler}>
			{inputItems.map( ({ name, label, placeholder, type }) => name === 'currentStatus' ? (
				<Autocomplete key={name}
					options={['active', 'inactive']}
					renderInput={params => <TextField {...params} 
						// variant='standard'
						InputLabelProps={{ shrink: true }}
						label={label}
						placeholder={placeholder}
						type={type}
						fullWidth
						margin='dense'

						error={!fields[name as keyof Fields] || !!fieldsError[name]}
						helperText={fieldsError[name]}
					/>}
						onChange={(evt, newValue) => autoCompleteChangeHandler(newValue)}
				/>
			) : (
				<TextField key={name}
					// variant='standard'
					InputLabelProps={{ shrink: true }}
					label={label}
					placeholder={placeholder}
					type={type}
					fullWidth
					margin='dense'

					value={fields[name as keyof Fields]}
					onChange={changeHandler(name)}

					error={!fields[name as keyof Fields] || !!fieldsError[name]}
					helperText={fieldsError[name]}
				/>
			))}

			<Box sx={{
				display: 'flex',
				justifyContent: 'flex-end',
				gap: .5,
				my: 2
			}}>
				<Button variant='outlined' onClick={resetHandler}>Reset</Button>
				<Button variant='contained' type='submit'>Add</Button>
			</Box>
		</form>
	)
}
