import Link from 'next/link'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import isEmail from 'validator/lib/isEmail'
import { signIn, useSession } from 'next-auth/react'
import * as userReducer from '@/store/userReducer'
import { useAppDispatch } from '@/store/hooks'

import { MUTATION_LOGIN } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'
import { loginFormInputItems } from '@/data/client'
import withCenterContainer from '@/shared/hoc/withCenterContainer'

import SocialMediaLoginButton from '@/components/lsocialMediaLoginButton'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'

import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/FacebookRounded'


const socialMediaLogins = [
	{
		name: 'google',
		label: 'Google',
		color: 'white',
		backgroundColor: '#d8472f',
		icon: <GoogleIcon />,
		// handler: () => {console.log('google handler')}
	},
	{
		name: 'github',
		label: 'Github',
		color: 'white',
		backgroundColor: '#313131',
		icon: <GitHubIcon />,
		// handler: () => {console.log('github handler')}
	},
	{
		name: 'facebook',
		label: 'Facebook',
		color: 'white',
		backgroundColor: '#1976d2',
		icon: <FacebookIcon />,
		// handler: () => {console.log('facebook handler')}
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

	if( fields.email && !isEmail(fields.email) ) tempObj.email = 'Invalid Email Address'
	if( fields.password && fields.password.length < 8 ) tempObj.password = 'password must by atleast 8 character long'

	Object.keys(fields).forEach(field => {
		if(!fields[field as keyof FieldsState]) tempObj[field] = `'${field}' is emapty`
	})
	setFieldsError(tempObj)

	return Object.values(tempObj).every( item => item == '' )
}


const Login = () => {
	const { status } = useSession()
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [ fields, setFields ] = useState<FieldsState>(initialState)
	const [ fieldsError, setFieldsError ] = useState<TempObj>(initialState)

	const [ loginUser, { loading, error } ] = useMutation<LoginMutationState, LoginVariables>(MUTATION_LOGIN)


	useEffect(() => {
		if(status === 'authenticated') router.push('/user/profile')
	}, [status, router])



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

		const user = await signIn('credentials', {
			email: 'abc@gmail.com',
			password: 'asdfasdf',
			redirect: false 							// prevent from redirect to signIn page
		})
		return console.log(user)

		// try {
		// 	dispatch(userReducer.request())
			
		// 	// addUser({ variables: {input: { email: 'abc', password: 'asdf' } } })
		// 	const user = await loginUser({ variables: { input: fields } })
		// 	if(!user.data) return console.log(user)
		// 	// console.log(user.data?.login)

		// 	dispatch( userReducer.logedIn(user.data.login))
		// 	setFields(initialState)
		// 	router.push('/user/profile')

		// } catch (err: any) {
		// 	console.log(err.message)
		// 	userReducer.failed(err.message)
		// }
	}

	// const githubLoginHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
	// 	evt.preventDefault()
	// 	signIn()
	// }

	return (
		<>
		{error && <p> alert: {error.message}</p>}

		<Box sx={{ display: 'flex' }}>
			<Box sx={{ flex: 1, position: 'relative', display: { xs: 'none', md: 'block' } }}>
				<Image 
					src='/images/carousel/screenshot.jpg'
					alt='signin logo'
					width={250}
					height={150}
					layout='fill'
				/>
			</Box>
			<Divider flexItem orientation='vertical' sx={{ mr: 4, display: { xs: 'none', md: 'block'} }} />
			<Box sx={{ flex: 1, py: 8 }}>
				<Box sx={{ px: { md: 8 } }}>

					<form noValidate onSubmit={handleSubmit} >
						{loginFormInputItems.map(({ name, label, placeholder, type }, index) => (
							<TextField key={name}
								label={label}
								InputLabelProps={{ shrink: true }}
								placeholder={placeholder}
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

						<Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', my: 2 }}>
							<Button variant='outlined' onClick={handleFormReset} >Clear</Button>
							<Button variant='contained' type='submit'>
								{loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Login' }
							</Button>
						</Box>
					</form>

					<Typography variant='subtitle2'>Have an account? 
						<Link href='/signup' passHref>
							<MuiLink> Sign In </MuiLink>
						</Link>
					</Typography>

					<Box sx={{ display: 'flex', flexDirection: 'column', mt: 8, gap: .5 }}>

						{socialMediaLogins.map( item => (
							<SocialMediaLoginButton key={item.name}
								item={item}
								handler={(name) => console.log(name)}
							/>
						))}
					</Box>

				</Box>
			</Box>
		</Box>
		</>
	)
}
export default Login
// export default withCenterContainer(Login)



export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {
	const data = await unstable_getServerSession(req, res, authOptions)

	if(data) return {
		redirect: {
			destination: '/user/profile',
			permanent: false
		}
	}

	return { 
		props: {}
	}
}

