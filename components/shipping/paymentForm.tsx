import { useState } from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const shippingFormInputItems = [
	{
		name: 'currency',
		type: 'text',
		label: 'Currency',
		placeholder: 'BDT',
	},
	{
		name: 'amount',
		type: 'number',
		label: 'Amount',
		placeholder: '224',
	},
]

// const cardItems = [
// 	{ label: 'Card Number', component: CardNumberElement },
// 	{ label: 'Expiration Date', component: CardExpiryElement },
// 	{ label: 'CVC', component: CardCvcElement }
// ]
// const countriesList = Object.values(countries)


export const PaymentForm = () => {
	const [ fields, setFields ] = useState({
		currency: '',
		amount: '',
	})
	const [ fieldsError, setFieldsError ] = useState({
		currency: ''
	})

	const changeHandler = (field: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [field]: evt.target.value })
	}

	return (
		<>
		<Tabs value={0} >
			<Tab label='Payment' />
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
