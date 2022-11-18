import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box'
import DrawerList from './list'

export type DrawerListItem = {
	label: string,
	Icon: React.ComponentType,
	path: string
}

type Props = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	listItems: DrawerListItem[]
}
const Drawer = ({ open, setOpen, listItems }: Props) => {

	const drawerCloseHandler = () => {
		setOpen(false)
	}

	return (
		<>
			<SwipeableDrawer
				open={open}
				anchor='left'
				onOpen={() => setOpen(true)}
				onClose={drawerCloseHandler}
			>
				<Box sx={{ width: 250 }}>
					<DrawerList 
						listItems={listItems} 
						closeHandler={drawerCloseHandler}

					/>
				</Box>
			</SwipeableDrawer>
		</>
	)
}
export default Drawer
