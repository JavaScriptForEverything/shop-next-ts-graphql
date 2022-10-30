import { useState } from 'react'

type LoginState = {
	email: string
	password: string
}

const Login = () => {
	const [ fields, setFields ] = useState({} as LoginState)

	return (
		<>
			<form>
				<input type='email' value={fields.email} />
				<input type='password' value={fields.password} />

				<button type='submit'>Login</button>
			</form>
		</>
	)
}
export default Login
