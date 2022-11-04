import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { MUTATION_LOGIN } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'

import { TextField } from '@mui/material'


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
const loginFields: FieldsState = {
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

	Object.keys(fields).forEach(field => {
		if(!fields[field as keyof FieldsState]) tempObj[field] = `'${field}' is emapty`
	})
	setFieldsError(tempObj)

	return Object.values(tempObj).every( item => item == '' )
}

const Login = () => {
	const [ fields, setFields ] = useState<FieldsState>(loginFields)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(loginFields)

	const [ loginUser, { data, error } ] = useMutation<LoginMutationState, LoginVariables>(MUTATION_LOGIN)

	const handleChange = (field: string ) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [field]: evt.target.value })
	}
	const handleSubmit = async(evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		if(!isFormValid(fields, setFieldsError)) return

		// return console.log(fields)



		try {
			// addUser({ variables: {input: { email: 'abc', password: 'asdf' } } })
			const result = await loginUser({ variables: { input: fields } })
			setFields(loginFields)
			// console.log(result)
		} catch (err) {
			console.log(err)
		}


	}


	return (
		<>
			<form noValidate onSubmit={handleSubmit} >
				{inputItems.map(({ name, label, placeholder, type }) => (
					<TextField key={name}
						label={label}
						placeholder={placeholder}
						InputLabelProps={{ shrink: true }}
						required
						fullWidth
						autoFocus
						margin='dense'

						type={type}
						value={fields[name as keyof FieldsState]} 					// method-1: geting type with type
						// value={fields[name as keyof typeof fields]} 			// method-2: geting type from value
						onChange={handleChange(name)}

						// error={!!fieldsError[name]}
						// error={!!fieldsError[name as keyof FieldsState]}
						error={!!fieldsError[name as keyof typeof fieldsError]}
						helperText={fieldsError[name as keyof typeof fieldsError]}
					/>
				))}



				{/* {inputItems.map(({ name, type, label, placeholder }) => (
					<div key={name}>
						<div style={{ display: 'flex', gap: 24 }}>
							<label htmlFor={name}>{label}</label>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<input 
									id={name}
									placeholder={placeholder}
									type={name}
									value={fields[name as keyof FieldsState]} 
							// 	value={fields[name as keyof typeof fields]} 
									onChange={handleChange(name)} 
								/>
								{fieldsError[name as keyof typeof fieldsError] && ( <small style={{ color: 'red' }} >
									{fieldsError[name as keyof typeof fieldsError]}
									</small> 
								)}
							</div>
						</div>

					</div>
				))} */}


				{/* <div>
					<label htmlFor='email'>Your Email :</label>
					<input 
						id='email' 
						placeholder='abc@gmail.com'
						type='email' 
						value={fields.email} 
						onChange={handleChange('email')} 
					/>
				</div>

				<div>
					<label htmlFor='password'> Password : </label>
					<input 
						id='password' 
						placeholder='********'
						type='password' 
						value={fields.password} 
						onChange={handleChange('password')} 
					/>
				</div> */}

				<button type='submit'>Login</button>
			</form>

			{error && <p>{error.message}</p>}
			<pre>
				{data && JSON.stringify(data?.login, null, 2)}
			</pre>
		</>
	)
}
export default Login
