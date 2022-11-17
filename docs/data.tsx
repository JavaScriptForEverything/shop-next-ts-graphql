
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import ReviewsIcon from '@mui/icons-material/Reviews'


export const panelItems = [
	{ 
		label: 'Home', 
		name: 'home', 
		path: '/docs/', 
		icon: <HomeIcon />
	},
	{ 
		label: 'Users', 
		name: 'users', 
		path: '/docs/users', 
		icon: <PeopleIcon />
	},
	{ 
		label: 'Products', 
		name: 'products', 
		path: '/docs/products', 
		icon: <CardGiftcardIcon /> 
	},
	{ 
		label: 'Reviews', 
		name: 'reviews', 
		path: '/docs/reviews', 
		icon: <ReviewsIcon /> 
	},
	// { 
	// 	label: 'Customers', 
	// 	name: 'customers', 
	// 	path: '/user/dashboard/customers', 
	// 	icon: <PeopleIcon /> 
	// },
	// { 
	// 	label: 'Settings', 
	// 	name: 'settings', 
	// 	path: '/user/dashboard/settings', 
	// 	icon: <SettingsIcon /> 
	// },
]