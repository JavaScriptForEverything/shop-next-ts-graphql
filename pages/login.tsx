import { MUTATION_LOGIN } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'
import { useMutation } from '@apollo/client'
import { useState } from 'react'

// const inputItems = [
// 	{
// 		name: 'email',
// 		label: 'Your Email',
// 		type: 'email',
// 	}
// ]

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

const Login = () => {
	const [ fields, setFields ] = useState<FieldsState>(loginFields)
	const [ loginUser, { data, error } ] = useMutation<LoginMutationState, LoginVariables>(MUTATION_LOGIN)

	const handleSubmit = async(evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		// // console.log(fields)
		// // addUser({ variables: {input: { email: 'abc', password: 'asdf' } } })
		// loginUser({ variables: { input: fields } })
		// setFields(loginFields)


		try {
			const result = await loginUser({ variables: { input: fields } })
			console.log(result)
		} catch (err) {
			console.log(err)
		}


	}

	const handleChange = (field: string ) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [field]: evt.target.value })
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
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
				</div>

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
