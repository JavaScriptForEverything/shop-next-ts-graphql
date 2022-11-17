import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'


type Props = {
	name: string,
	label: string,
	icon: JSX.Element,
	selected: boolean,
	onClick?: () => void
}
export const ListItem = (props: Props) => {
	const { 
		label, 
		icon, 
		selected, 
		onClick 
	} = props

	return (
		<MenuItem 
			divider 
			selected={selected} 
			onClick={onClick}
			title={label}
			sx={{ py: 2, pr: { xs: 0, md: 4 } }}
		>
			<ListItemIcon>{icon}</ListItemIcon>
			<Box sx={{ display: { xs: 'none', md: 'block'}}}>
				<ListItemText primary={label} />
			</Box>
		</MenuItem>
	)
}
