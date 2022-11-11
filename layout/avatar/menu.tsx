import StyledAvatar from './styledAvatar'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import LogoutIcon from '@mui/icons-material/Logout'

const menuItems = [
	{ label: 'Dashboard', path: '/user/dashboard', icon: <DashboardIcon /> },
	{ label: 'Profile', path: '/user/profile', icon: <PersonIcon /> },
	// { label: 'Update Password', path: '/user/update-my-password', icon: <VpnKeyIcon /> },
	{ label: 'Logout', path: '/user/logout', icon: <LogoutIcon /> },
]


type Props = {
	open: boolean
	anchorEl: null | HTMLButtonElement
	closeHandler: () => void
	itemHandler: (item: string) => (evt: React.MouseEvent<HTMLLIElement>) => void
	user: {
		name: string
		avatar: string
	}
}
const AvatarMenu = ( props: Props) => {
	const { 
		open, 
		anchorEl, 
		closeHandler, 
		itemHandler,
		user
	} = props

	return (
		<>
			<Menu 
				open={open}
				anchorEl={anchorEl}
				onClose={closeHandler}
				PaperProps={{
					style: {
						width: 180
					}
				}}
			>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					my: 2
				}}>
					<StyledAvatar src={user.avatar} sx={{ width: 80, height: 80 }} />
					<Typography color='primary' sx={{ mt: 1, mb: 2 }}>{user.name}</Typography>
				</Box>

				<Divider />
				{menuItems.map(({ label, icon, path }) => (
				<MenuItem key={label} disableGutters divider dense onClick={itemHandler(path)}>
					<ListItemButton >
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={label} />
					</ListItemButton>
				</MenuItem>
				))}

			</Menu>
		</>
	)
}
export default AvatarMenu
