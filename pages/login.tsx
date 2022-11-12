import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import isEmail from 'validator/lib/isEmail'
import * as userReducer from '@/store/userReducer'
import { useAppDispatch } from '@/store/hooks'

import { MUTATION_LOGIN } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'
import { loginFormInputItems } from '@/data/client'
import withCenterContainer from '@/shared/hoc/withCenterContainer'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'



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

	if( fields.email && !isEmail(fields.email) ) tempObj.email = 'Invalid Email Address'
	if( fields.password && fields.password.length < 8 ) tempObj.password = 'password must by atleast 8 character long'

	Object.keys(fields).forEach(field => {
		if(!fields[field as keyof FieldsState]) tempObj[field] = `'${field}' is emapty`
	})
	setFieldsError(tempObj)

	return Object.values(tempObj).every( item => item == '' )
}


const Login = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [ fields, setFields ] = useState<FieldsState>(initialState)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialState)

	const [ loginUser, { loading, error } ] = useMutation<LoginMutationState, LoginVariables>(MUTATION_LOGIN)


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
			dispatch(userReducer.request())
			
			// addUser({ variables: {input: { email: 'abc', password: 'asdf' } } })
			const user = await loginUser({ variables: { input: fields } })
			if(!user.data) return console.log(user)
			// console.log(user.data?.login)

			dispatch( userReducer.logedIn(user.data.login))
			setFields(initialState)
			router.push('/user/profile')

		} catch (err: any) {
			console.log(err.message)
			userReducer.failed(err.message)
		}


	}


	return (
		<>
			<form noValidate onSubmit={handleSubmit} >
				{loginFormInputItems.map(({ name, label, placeholder, type }, index) => (
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
					<Button variant='contained' type='submit'>
						{loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login' }
					</Button>
				</Box>
			</form>

			{error && <p>{error.message}</p>}
			{/* <pre>
				{data && JSON.stringify(data?.login, null, 2)}
			</pre> */}
		</>
	)
}
// export default Login

export default withCenterContainer(Login)
// export default withCenterContainer<LoginProps>(Login)
