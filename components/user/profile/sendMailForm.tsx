import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import isEmail from 'validator/lib/isEmail'

const inputItems = [
	{
		label: 'To',
		placeholder: 'abc@gmail.com',
		name: 'email',
		type: 'email',
		haveBlur: true,
		rows: 1
	},
	{
		label: 'Subject',
		placeholder: 'subject',
		name: 'subject',
		type: 'subject',
		haveBlur: false,
		rows: 1
	},
	{
		label: '',
		placeholder: '',
		name: 'body',
		type: 'body',
		haveBlur: false,
		rows: 6
	},
]

type InitialFields = {
	email: string,
	subject: string,
	body: string,
}
const initialFields: InitialFields = {
	email: '',
	subject: '',
	body: ''
}

type TempObj = {
	[key: string]: string
}
export type MyImage = {
	name: string,
	size: string,
	url: string
}
export type FieldsProps = {
	coverPhoto: MyImage,
	images: MyImage[]
}

const isFormValidate = (fields: InitialFields, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>): boolean => {
	const tempObj: TempObj = {}

	if(fields.email && !isEmail(fields.email)) tempObj['email'] = 'in valid email'

	Object.entries(fields).forEach(([key, value]) => {
		if(typeof value === 'string' && !value.trim()) return tempObj[key] = `${key} field is empty`
	})

	setFieldsError(tempObj)
	return Object.values(tempObj).every( field => !field)
}




export const SendMailForm = () => {
	const [ fields, setFields ] = useState<InitialFields>(initialFields)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialFields)

	const [ loading, setLoading ] = useState(false)

	useEffect(() => {
		isFormValidate(fields, setFieldsError)
	}, [fields])

	const changeHandler = (field: keyof typeof fields) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [field]: evt.target.value })
	}

	const resetHandler = () => {
		setFields(initialFields)
	}
	const submitHandler = () => {
		if( !isFormValidate(fields, setFieldsError) ) return console.log('invalid')

		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			console.log(fields)	
			setFields(initialFields)
		}, 1000);
	}

	return (
		<Box>

				{inputItems.map(({ label, placeholder, type, name, haveBlur, rows }) => (
					<TextField key={name}
						label={label }
						placeholder={placeholder}
						type={type}
						required
						fullWidth
						margin='dense'
						size='small'
						value={fields[name as keyof typeof fields]}
						onChange={changeHandler(name as keyof typeof fields)}

						multiline
						rows={rows}

						error={!fields[name as keyof typeof fields] || !!fieldsError[name as keyof typeof fieldsError]}
						helperText={fieldsError[name as keyof typeof fieldsError]}
					/>
				))}

			<Box sx={{
				mt: 1,
				display: 'flex',
				justifyContent: 'flex-end',
				gap: .5,
			}}>
					<Button 
						variant='outlined'
						size='small'
						onClick={resetHandler}
					>Reset</Button>

					<Button 
						variant='contained'
						size='small'
						onClick={submitHandler}
					>
						{loading ? <CircularProgress size={24} color='inherit' /> : 'Send' }
					</Button>
			</Box>

		</Box>
	)
}
