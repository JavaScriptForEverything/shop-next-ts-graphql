import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { MUTATION_SIGNUP } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'


type FieldsState = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

const initialFields: FieldsState = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
}

type SignupMutation = {
	signup: UserDocument
}
type SignupVariables = {
	input: FieldsState
}

const Signup = () => {
	const [ fields, setFields ] = useState(initialFields)
	const [ addUser, { data } ] = useMutation<SignupMutation, SignupVariables>(MUTATION_SIGNUP)

	const handleChange = (field: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({...fields, [field]: evt.target.value })
	}

	const handleSubmit = async(evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		try {
			await addUser({ variables: { input: fields } }) 
			setFields(initialFields) // clear fields
			
		} catch (err: any) {
			window.alert(err.message)
		}
	}

	return (
		<>
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Full Name :</label>
				<input 
					id='name'
					placeholder='riajul islam'
					type='text' 
					value={fields.name} 
					onChange={handleChange('name')} 
				/> 
			</div>

			<div>
				<label htmlFor='name'>Your Email :</label>
				<input 
					id='email'
					placeholder='abc@gmail.com'
					type='email' 
					value={fields.email} 
					onChange={handleChange('email')} 
				/> 
			</div>

			<div>
				<label htmlFor='password'>Password :</label>
				<input 
					id='password'
					placeholder='********'
					type='password' 
					value={fields.password} 
					onChange={handleChange('password')} 
				/> 
			</div>

			<div>
				<label htmlFor='confirmPassword'>Confirm Password :</label>
				<input 
					id='confirmPassword'
					placeholder='********'
					type='password' 
					value={fields.confirmPassword} 
					onChange={handleChange('confirmPassword')} 
				/> 
			</div>

			<button type='submit'>Signup</button>
		</form>
		
		<pre>
			{JSON.stringify(data?.signup, null, 2)}
		</pre>
		</>
	)
}
export default Signup
