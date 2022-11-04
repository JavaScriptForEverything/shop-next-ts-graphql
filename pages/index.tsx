import Link from 'next/link'

import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'

const navItems = [
	{ label: 'Login', path: '/login' },
	{ label: 'Signup', path: '/signup' },
	{ label: 'User', path: '/user' },
]

const Home = () => {

	return (
		<>
			<h2>Home Page</h2>


			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				{navItems.map(({ label, path }) => (
					<Link key={path} href={path} passHref>
						<MuiLink> {label} </MuiLink>
					</Link>
				))}
			</Box>

		</>
	)
}
export default Home
