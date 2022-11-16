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
import { signupFormInputItems } from '@/data/client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'



type FieldsState = {
	name: string,
	email: string,
	password: string,
	confirmPassword: string,
	avatar: string
}
const initialState: FieldsState = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
	avatar: '',
}

type VisibleType = {
	[key: string]: boolean
}
const initialVisibles: VisibleType = {
	password: false,
	confirmPassword: false,
	avatar: false
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
	const { email, password, confirmPassword } = fields

	if( !isEmail(email) ) tempObj.email = 'Invalid Email Address'
	if( password.length < 8 ) tempObj.password = 'password must by atleast 8 character long'
	if( confirmPassword !== password ) tempObj.confirmPassword = 'please type currect password'

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
	const [ visibles, setVisibles ] = useState<VisibleType>(initialVisibles)

	const [ loginUser, { loading, error } ] = useMutation<LoginMutationState, LoginVariables>(MUTATION_LOGIN)





	// useEffect(() => {
	// 	if(status === 'authenticated') router.push('/user/profile')
	// }, [status, router])



	const handleToggleIcon = (name: string) => () => {
		setVisibles({ ...visibles, [name]: !visibles[name] })
	}

	// solve the problem: setstate always one step behind
	useEffect(() => { isFormValid(fields, setFieldsError) }, [fields])
	const handleChange = (field: string ) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		if(field !== 'avatar') {
			setFields({ ...fields, [field]: evt.target.value })

		} else {
			const files = evt.target.files
			if(!files) return

			const isImage =  files[0].type.match('image/*') 
			if(!isImage) return

			const reader = new FileReader()
			reader.readAsDataURL(files[0])
			reader.onload = () => {
				if(!reader.result) return

				const result = reader.result as string
				setFields({...fields, [field]: result })
				setVisibles({ ...visibles, [field]: !visibles[field] })
			}
		}
	}
	const resetAvatar = () => {
		const avatarElement = document.getElementById('avatar')! as HTMLInputElement
		avatarElement.value = ''
		setVisibles({ ...visibles, avatar: false })
	}
	const handleAvatarClear = (name: string) => () => {
		setFields({ ...fields, [name]: '' })
		resetAvatar()
	}

	const handleFormReset = (evt: React.MouseEvent<HTMLButtonElement>) => {
		setFields(initialState)
		setFieldsError(initialState)
		setVisibles(initialVisibles)
		resetAvatar()
	}
	const handleSubmit = async(evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		if(!isFormValid(fields, setFieldsError)) return

		console.log(fields)

		// const user = await signIn('credentials', {
		// 	email: 'abc@gmail.com',
		// 	password: 'asdfasdf',
		// 	redirect: false 							// prevent from redirect to signIn page
		// })
		// return console.log(user)

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
						{signupFormInputItems.map(({ name, label, placeholder, type, adornment }, index) => name !== 'avatar' ? (
							<TextField key={name}
								label={label}
								InputLabelProps={{ shrink: true }}
								placeholder={placeholder}
								required
								fullWidth
								autoFocus={index === 0}
								margin='dense'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>{adornment.startIcon}</InputAdornment>
									),
									endAdornment: type === 'password' ? (
										<InputAdornment position='end'>
											<IconButton 
												onClick={handleToggleIcon(name)} 
												color={visibles[name] ? 'primary' : 'default'}
											> {adornment.endIcons[0]} </IconButton>
										</InputAdornment>
									) : ''
								}}

								type={visibles[name] ? 'text' : type}
								value={fields[name as keyof FieldsState]} 				// method-1: geting type with type
								onChange={handleChange(name)}

								error={!!fieldsError[name as keyof typeof fieldsError]}
								helperText={fieldsError[name as keyof typeof fieldsError]}
							/>
						): (
							<TextField key={name} 
								id={name}
								type={type}
								fullWidth
								onChange={handleChange(name)}
								error={!!fieldsError[name as keyof typeof fieldsError]}
								helperText={fieldsError[name as keyof typeof fieldsError]}
								// onReset={(evt) => evt.target.}
								
								InputProps={{
									inputProps: {
										accept: 'image/*'
									},
									startAdornment: (
										<InputAdornment position='start'>
											<Avatar src={fields[name]} />
										</InputAdornment>
									),
									endAdornment: visibles[name] ? (
										<InputAdornment position='end'>
											<IconButton 
												onClick={handleAvatarClear(name)} 
											> {adornment.endIcons[0]} </IconButton>
										</InputAdornment>
									) : ''
								}}
							/>
						))}

						<Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', my: 2 }}>
							<Button variant='outlined' onClick={handleFormReset} >Clear</Button>
							<Button variant='contained' type='submit'>
								{loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Sign Up' }
							</Button>
						</Box>
					</form>

					<Typography variant='subtitle2'>Already a member? 
						<Link href='/login' passHref>
							<MuiLink> Login</MuiLink>
						</Link>
					</Typography>

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

