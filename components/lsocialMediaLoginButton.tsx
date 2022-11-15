import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

type Props = {
	item: {
		name: string,
		label: string,
		color: string,
		backgroundColor: string,
		icon: JSX.Element,
	},
	handler: (name: string) => void
}
const SocialMediaLoginButton = ({ item, handler }: Props) => {
	const { name, label, color, backgroundColor, icon } = item

	return (
		<Box key={name} onClick={() => handler(name)} sx={{
			display: 'flex',
			alignItems: 'center',
			...removeHover({ color, backgroundColor })
		}}>
			<Button color='inherit' > {icon} </Button>
			<Divider flexItem  orientation='vertical' />
			<Button color='inherit' sx={{ flex: 1, textTransform: 'none' }}>Login with {label}</Button>
		</Box>
	)
}
export default SocialMediaLoginButton


type RemoveHover = {
	color?: string,
	backgroundColor?: string
}
const removeHover = ({ color='white', backgroundColor='orange' }: RemoveHover) => ({
	borderRadius: 1,
	color,
	backgroundColor,
		':hover' : {
		backgroundColor,
	}
})