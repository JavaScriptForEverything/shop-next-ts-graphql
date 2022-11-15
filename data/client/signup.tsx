
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import FingerprintIcon from '@mui/icons-material/Fingerprint'

export const signupFormInputItems = [
	{
		name: 'name',
		type: 'text',
		label: 'Your Name',
		placeholder: 'Riajul Islam',
		adornment: {
			startIcon: <PersonIcon />,
			endIcons: [<PersonIcon key='user-icon' />]
		}
	},
	{
		name: 'email',
		type: 'email',
		label: 'Your Email',
		placeholder: 'abc@gmail.com',
		adornment: {
			startIcon: <EmailIcon />,
			endIcons: [<AlternateEmailIcon key='email-icon' />]
		}
	},
	{
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: '********',
		adornment: {
			startIcon: <LockIcon />,
			endIcons: [<FingerprintIcon key='password-icon' />]
		}
	},
	{
		name: 'confirmPassword',
		type: 'password',
		label: 'Confirm Password',
		placeholder: '********',
		adornment: {
			startIcon: <LockIcon />,
			endIcons: [<FingerprintIcon key='confirmPassword-icon' />]
		}
	},
]