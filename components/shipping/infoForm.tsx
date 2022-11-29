import type { ShippingInfo } from '@/shared/types/shipping'
import { useEffect, useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

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

type TempObj = {
	[key: string]: string
}

const initialValue = {
	name: '',
	email: '',
	country: '',
	phone: '',
	address: '',
	postalCode: ''
}

const formValidator = (fields: ShippingInfo, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>): boolean => {
	const tempObj: TempObj = {}

	if( !isEmail(fields.email) ) tempObj.email = 'email is invalid'

	Object.keys(fields).forEach( field => {
		if( !fields[field as keyof ShippingInfo] ) tempObj[field] = `${field} field is empth`
	})

	setFieldsError(tempObj)
	return Object.values(tempObj).every(value => !value.trim())
}

export const InfoForm = () => {
	const dispatch = useAppDispatch()
	const [ fields, setFields ] = useState<ShippingInfo>(initialValue)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialValue)
	const { shippingInfo } = useAppSelector(state => state.layout)

	const changeHandler = (field: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [field]: evt.target.value })
	}

	// step-3: set to react state from redux store, which set in shipping.tsx file
	useEffect(() => {
		setFields(shippingInfo)
	}, [shippingInfo])

	// normal form validation
	useEffect(() => {
		formValidator(fields, setFieldsError)
		dispatch(layoutReducer.updateShippingInfo(fields))
	}, [fields, dispatch])
		// console.log(fields)

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
					helperText={fieldsError[name as keyof typeof fieldsError]}
				/>
			))}

		</Box>
		</>
	)
}
