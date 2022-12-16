import { useState } from 'react'
import { countries } from 'countries-list'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

type Country = {
	name: string,
	currency: string,
	emoji: string,
	phone: string,
}
const countriesList = Object.values(countries).map( (country: Country) => ({
	name: country.name,
	currency: country.currency,
	emoji: country.emoji,
	phone: country.phone,
}))

// console.log(countriesList)

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
		currency: '',
		amount: ''
	})

	const [ country, useCountry ] = useState<Country>({
		name: '',
		currency: '',
		emoji: '',
		phone: '',
	})

	// const changeHandler = (field: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	// 	setFields({...fields, [field]: evt.target.value })
	// }

	const changeHandler = (name: string, country: Country | null) => {
		if(!country?.currency) return

		setFields({ ...fields, currency: country.currency })
	}

	console.log(fields)

	return (
		<>
		<Tabs value={0} >
			<Tab label='Payment' />
		</Tabs>

		<Box sx={{ my: 2, px: { xs: 1, sm: 2 } }}>
			<TextField 
				label={'Amount'}
				placeholder={'200'}
				fullWidth
				margin='dense'
				required

				type={'number'}
				value={fields.amount}
				onChange={(evt) => setFields({ ...fields, amount: evt.target.value })}

				error={!fields['amount'] || !!fieldsError['amount']}
				helperText={fieldsError['amount']}
			/>

			<Autocomplete
				options={countriesList}
				getOptionLabel={country => `${country.emoji} ${country.name} (${country.currency})`}
				renderInput={params => <TextField {...params}
					label='Currency'
					InputLabelProps={{ shrink: true }}
					placeholder='Currency'
					required
					margin='dense'

					error={!fields['currency'] || !!fieldsError['currency']}
					helperText={fieldsError['currency']}
				/>}
				onChange={(evt, country) => changeHandler('currency', country)}
				// value={{ 
				// 	name: country.name, 
				// 	currency: country.currency,
				// 	emoji: country.emoji, 
				// 	phone: country.phone, 
				// }}
			/>

		</Box>
		</>
	)
}
