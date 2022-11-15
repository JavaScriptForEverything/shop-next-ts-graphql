import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import FingerprintIcon from '@mui/icons-material/Fingerprint'

export const loginFormInputItems = [
	{
		name: 'email',
		type: 'email',
		label: 'Your Email',
		placeholder: 'abc@gmail.com',
		adornment: {
			startIcon: <EmailIcon />,
			endIcons: [<AlternateEmailIcon key='email-icon-1' />]
		}
	},
	{
		name: 'password',
		type: 'password',
		label: 'Password',
		placeholder: '********',
		adornment: {
			startIcon: <LockIcon />,
			endIcons: [<FingerprintIcon key={1} />]
		}
	},
]