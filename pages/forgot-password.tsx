import type { SxProps } from '@mui/material'
import { useState } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import FingerprintIcon from '@mui/icons-material/Fingerprint'

type Field = {
	name: string,
	type: string,
	label: string,
	placeholder: string,
	adornment: {
		startIcon: JSX.Element,
		endIcon?: JSX.Element
	}
}

const resetPasswordInputItems: Field[] = [
	{
		name: 'token',
		type: 'text',
		label: 'Token',
		placeholder: 'token ...',
		adornment: {
			startIcon: <VpnKeyIcon />,
		}
	},
	{
		name: 'password',
		type: 'password',
		label: 'New Password',
		placeholder: '********',
		adornment: {
			startIcon: <LockIcon />,
			endIcon: <FingerprintIcon />
		}
	},
	{
		name: 'confirmPassword',
		type: 'password',
		label: 'Confirm Password',
		placeholder: '********',
		adornment: {
			startIcon: <LockIcon />,
			endIcon: <FingerprintIcon />,
		}
	},
]

type TempObj = {
	[key: string]: string
}
type Visibility = {
	[key: string]: boolean
}
type ResetPasswordFields = {
	token: string,
	password: string,
	confirmPassword: string,
}

type TabPanelProps = {
	children: React.ReactNode,
	tabIndex: number,
	tabId: number,
	sx?: SxProps
}
const TabPanel = ({ children, tabIndex, tabId, sx={} }: TabPanelProps) => {
	return (
		<Box hidden={tabIndex !== tabId} sx={sx}>
			{children}
		</Box>
	)
}

const ForgotPassword = () => {
	const [ tabIndex, setTabIndex ] = useState(0)
	const [ forgotFields, setForgotFields ] = useState({
		email: ''
	})
	const [ forgotFieldsError, setForgotFieldsError ] = useState({
		email: ''
	})
	const [ resetFields, setResetFields ] = useState<ResetPasswordFields>({
		token: '',
		password: '',
		confirmPassword: '',
	})
	const [ resetFieldsError, setResetFieldsError ] = useState<TempObj>({
		email: ''
	})
	const [ visibility, setVisibility ] = useState<Visibility>({})

	const [ loading, setLoading ] = useState(false)

	const endAdornmentClickHandler = (name: string) => () => {
		setVisibility({ ...visibility, [name]: !visibility[name]})
	}
	const handleForgotPasswordChangeEvent = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setForgotFields({ ...forgotFields, [name]: evt.target.value })
	}
	const handleResetPasswordChangeEvent = (name: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		setResetFields({ ...resetFields, [name]: evt.target.value })
	}

	const handleForgotPasswordSubmitForm = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			console.log(forgotFields)
		}, 1000)
	}

	const handleResetPasswordSubmitForm = () => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			console.log(resetFields)
		}, 1000)
	}

	return (
		<Grid container justifyContent='center'>
			<Grid item xs={12} sm={6} md={4}>
				<Paper sx={{ p: 2 }}>
					<Tabs value={tabIndex} onChange={(evt, newIndex) => setTabIndex(newIndex) }>
						<Tab label='Forgot Password' />
						<Tab label='Reset Password' />
					</Tabs>

					<TabPanel tabIndex={tabIndex} tabId={0} sx={{ mt: 1 }}>
						<TextField 
							label='Email Address'
							placeholder='abc@gmail.com'
							InputLabelProps={{ shrink: true }}
							margin='dense'
							required
							fullWidth

							InputProps={{
								startAdornment: <InputAdornment position='start'><EmailIcon /></InputAdornment>,
							}}	

							value={forgotFields['email']}
							onChange={handleForgotPasswordChangeEvent('email')}

							error={!forgotFields['email'] || !!forgotFieldsError['email']}
							helperText={forgotFieldsError['email']}
						/>
						<Button 
							variant='contained'
							fullWidth
							onClick={handleForgotPasswordSubmitForm}
							sx={{ mt: 2 }}
						>
							{loading ? <CircularProgress size={24} sx={{ color: 'white'}} /> : 'Send' }
						</Button>
					</TabPanel>

					<TabPanel tabIndex={tabIndex} tabId={1} sx={{ mt: 1 }}>
						{resetPasswordInputItems.map(({ name, label, type, placeholder, adornment}) => (
							<TextField key={name}
								label={label}
								placeholder={placeholder}
								InputLabelProps={{ shrink: true }}
								margin='dense'
								required
								fullWidth
								type={visibility[name] ? 'text' : type }

								InputProps={{
									startAdornment: <InputAdornment position='start'>{adornment.startIcon}</InputAdornment>,
									endAdornment: type === 'password' ? (
										<InputAdornment position='end'>
											<IconButton 
												color={ visibility[name] ? 'primary' : 'default' } 
												onClick={endAdornmentClickHandler(name)}
											>
												{adornment.endIcon}
											</IconButton>
										</InputAdornment>
									) : ''
									
								}}	

								value={resetFields[name as keyof typeof resetFields]}
								onChange={handleResetPasswordChangeEvent(name)}

								error={!resetFields[name as keyof typeof resetFields] || !!resetFieldsError[name]}
								helperText={resetFieldsError[name]}
							/>
						))}
						<Button 
							variant='contained'
							fullWidth
							onClick={handleResetPasswordSubmitForm}
							sx={{ mt: 2 }}
						>
							{loading ? <CircularProgress size={24} sx={{ color: 'white'}} /> : 'Reset' }
						</Button>

					</TabPanel>
				</Paper>
			</Grid>
		</Grid>
	)
}
export default ForgotPassword
