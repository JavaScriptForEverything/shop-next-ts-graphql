import { useRouter } from 'next/router'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import type { DrawerListItem } from './index'

type Props = {
	listItems: DrawerListItem[]
	closeHandler: () => void
}

const DrawerList = ({ listItems, closeHandler }: Props) => {
	const router = useRouter()

	const clickHandler = (path: string) => () => {
		router.push(path)
		closeHandler()
	}

	return (
		<List>
			{listItems.map(({ label, icon, path }) => (
				<ListItem key={label} disablePadding selected={path === router.asPath} onClick={clickHandler(path)}>
					<ListItemButton>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={label.toUpperCase()} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}
export default DrawerList