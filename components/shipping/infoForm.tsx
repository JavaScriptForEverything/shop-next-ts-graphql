import { useState } from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const shippingFormInputItems = [
	{
		name: 'name',
		type: 'text',
		label: 'Your Name',
		placeholder: 'Riajul Islam',
	},
	{
		name: 'email',
		type: 'email',
		label: 'Your Email',
		placeholder: 'abc@gmail.com',
	},
	{
		name: 'country',
		type: 'text',
		label: 'Country Name',
		placeholder: 'Bangladesh',
	},
	{
		name: 'phone',
		type: 'text',
		label: 'Phone No',
		placeholder: '+088 01957500605'
	},
	{
		name: 'address',
		type: 'text',
		label: 'Street Address',
		placeholder: '315 Hazipara, Badda, Dhaka',
	},
	{
		name: 'postalCode',
		type: 'number',
		label: 'Postal Code',
		placeholder: '1212'
	},
]

export const InfoForm = () => {
	const [ fields, setFields ] = useState({
		name: '',
		email: '',
		country: '',
		phone: '',
		address: '',
		postalCode: ''

	})
	const [ fieldsError, setFieldsError ] = useState({
		name: ''
	})

	const changeHandler = (field: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [field]: evt.target.value })
	}

		console.log(fields)

	return (
		<>
		<Tabs value={0} >
			<Tab label='Shipping Info' />
		</Tabs>

		<Box sx={{ my: 2 }}>
			{shippingFormInputItems.map(({ label, name, type, placeholder }) => (
				<TextField key={name}
					label={label}
					placeholder={placeholder}
					fullWidth
					margin='dense'

					type={type}
					value={fields[name as keyof typeof fields]}
					onChange={changeHandler(name)}

					error={!fields[name as keyof typeof fields] || !!fieldsError[name as keyof typeof fieldsError]}
					helperText=''
				/>
			))}

		</Box>
		</>
	)
}
