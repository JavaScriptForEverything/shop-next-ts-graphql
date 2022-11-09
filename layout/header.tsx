import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'


const navItems = [
	{ label: 'home', path: '/' },
	{ label: 'about', path: '/about' },
	{ label: 'contact', path: '/contact' },
	{ label: 'docs', path: '/docs' },
	// { label: 'login', path: '/login' },
]

const Header = () => {
	const [ activeMenu, setActiveMenu ] = useState(0)
	const router = useRouter()

	useEffect(() => {
		const currentIndex = navItems.findIndex(nav => nav.path === router.asPath)
		if(currentIndex) setActiveMenu(currentIndex)
		if(router.asPath === '/login') setActiveMenu(navItems.length)
	}, [router])


	return (
		<>
		<Container>
			<Typography component='nav' color='textSecondary' sx={{ display: 'flex' }}>
			{navItems.map(({label, path}, index) => (
				<Link key={path} href={path} passHref>
					<MuiLink color='inherit'>
						<Button 
							color={activeMenu === index ? 'primary' : 'inherit' }
							onClick={() => setActiveMenu(index)}
							disableRipple
							sx={{
								borderBottom: (theme) => `1px solid ${activeMenu === index ? theme.palette.primary.main: 'transparent'}`,
								borderRadius: 0,
								marginLeft: 'auto'
							}}
						> {label} </Button>
					</MuiLink>
				</Link>
			))}

			<Box sx={{ ml: 'auto' }}>
				{ true ? (
					<Link href='/login' passHref>
						<MuiLink color='inherit'>
							<Button 
								color={activeMenu === navItems.length ? 'primary' : 'inherit' }
								onClick={() => setActiveMenu(navItems.length)}
								disableRipple
								sx={{
									borderBottom: (theme) => 
									`1px solid ${activeMenu === navItems.length ? theme.palette.primary.main: 'transparent'}`,
									borderRadius: 0,
								}}
							> Login </Button>
						</MuiLink>
					</Link>
				) : (
					<Avatar>
						R
					</Avatar>
				)}
			</Box>

			</Typography>





		</Container>
		<Divider />
		</>
	)
}
export default Header
