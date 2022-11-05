import { useState } from 'react'
import { useMutation } from '@apollo/client'
import isEmail from 'validator/lib/isEmail'

import { MUTATION_LOGIN } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


const inputItems = [
	{
		name: 'email',
		type: 'email',
		label: 'Your Email',
		placeholder: 'abc@gmail.com',
	},
	{
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: '********',
	},
]

type FieldsState = {
	email: string
	password: string
}
const initialState: FieldsState = {
	email: '',
	password: ''
}

type LoginMutationState = {
	login: UserDocument
}
type LoginVariables = {
	input: FieldsState
}

type TempObj = {
	[key: string]: string
}
const isFormValid = (fields: FieldsState, setFieldsError: React.Dispatch<React.SetStateAction<TempObj>>) => {
	const tempObj: TempObj = {}

	if( !isEmail(fields.email) ) tempObj.email = 'Invalid Email Address'
	if( fields.password.length < 8 ) tempObj.password = 'password must by atleast 8 character long'

	Object.keys(fields).forEach(field => {
		if(!fields[field as keyof FieldsState]) tempObj[field] = `'${field}' is emapty`
	})
	setFieldsError(tempObj)

	return Object.values(tempObj).every( item => item == '' )
}

const Login = () => {
	const [ fields, setFields ] = useState<FieldsState>(initialState)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialState)

	const [ loginUser, { data, error } ] = useMutation<LoginMutationState, LoginVariables>(MUTATION_LOGIN)

	const handleChange = (field: string ) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [field]: evt.target.value })
	}
	const handleFormReset = () => {
		setFields(initialState)
		setFieldsError(initialState)
	}
	const handleSubmit = async(evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		if(!isFormValid(fields, setFieldsError)) return

		// return console.log(fields)



		try {
			// addUser({ variables: {input: { email: 'abc', password: 'asdf' } } })
			const result = await loginUser({ variables: { input: fields } })
			setFields(initialState)
			// console.log(result)
		} catch (err) {
			console.log(err)
		}


	}


	return (
		<>
			<form noValidate onSubmit={handleSubmit} >
				{inputItems.map(({ name, label, placeholder, type }, index) => (
					<TextField key={name}
						label={label}
						placeholder={placeholder}
						InputLabelProps={{ shrink: true }}
						required
						fullWidth
						autoFocus={index === 0}
						margin='dense'

						type={type}
						value={fields[name as keyof FieldsState]} 					// method-1: geting type with type
						onChange={handleChange(name)}

						error={!!fieldsError[name as keyof typeof fieldsError]}
						helperText={fieldsError[name as keyof typeof fieldsError]}
					/>
				))}


				<Box sx={{
					display: 'flex',
					gap: 1,
					justifyContent: 'flex-end',
					my: 2
				}}>
					<Button variant='outlined' onClick={handleFormReset} >Clear</Button>
					<Button variant='contained' type='submit'>Login</Button>
				</Box>
			</form>

			{error && <p>{error.message}</p>}
			<pre>
				{data && JSON.stringify(data?.login, null, 2)}
			</pre>
		</>
	)
}
export default Login
