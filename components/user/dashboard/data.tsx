
import DashboardIcon from '@mui/icons-material/Dashboard'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import ListIcon from '@mui/icons-material/FormatListBulleted'
import PeopleIcon from '@mui/icons-material/People'
import SettingsIcon from '@mui/icons-material/Settings'


export const panelItems = [
	{ 
		label: 'Dashboard', 
		name: 'dashboard', 
		path: '/user/dashboard', 
		icon: <DashboardIcon />
	},
	{ 
		label: 'Products', 
		name: 'products', 
		path: '/user/dashboard/products', 
		icon: <CardGiftcardIcon /> 
	},
	{ 
		label: 'Orders', 
		name: 'orders', 
		path: '/user/dashboard/orders', 
		icon: <ListIcon /> 
	},
	{ 
		label: 'Customers', 
		name: 'customers', 
		path: '/user/dashboard/customers', 
		icon: <PeopleIcon /> 
	},
	{ 
		label: 'Settings', 
		name: 'settings', 
		path: '/user/dashboard/settings', 
		icon: <SettingsIcon /> 
	},
]