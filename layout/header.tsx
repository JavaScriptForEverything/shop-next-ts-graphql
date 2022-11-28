import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

import Drawer from './drawer'
import AvatarMenu from './avatar/menu'
import StyledAvatar from './avatar/styledAvatar'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'
import Switch from '@mui/material/Switch'
import Badge from '@mui/material/Badge'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import MailIcon from '@mui/icons-material/Mail'
import ArticleIcon from '@mui/icons-material/Article'


const navItems = [
	{ label: 'home', 		path: '/', 				Icon: HomeIcon  },
	{ label: 'about', 	path: '/about', 	Icon: PersonIcon  },
	{ label: 'contact', path: '/contact', Icon: MailIcon },
	{ label: 'docs', 		path: '/docs', 		Icon: ArticleIcon },
]

const Header = () => {
	const { status } = useSession()
	const router = useRouter()
	const dispatch = useAppDispatch()
	const [ activeMenu, setActiveMenu ] = useState(0)
	const [ drawerOpen, setDrawerOpen ] = useState(false)
	const [ openMenu, setOpenMenu ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<null | HTMLButtonElement>(null)

	const { carts } = useAppSelector(state => state.layout)

	useEffect(() => {
		dispatch(layoutReducer.getCarts())
	}, [dispatch])

	useEffect(() => {
		const currentIndex = navItems.findIndex(nav => nav.path === router.asPath)
		if(currentIndex) setActiveMenu(currentIndex)
		if(router.asPath === '/login') setActiveMenu(navItems.length)
	}, [router])

	const avatarClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
		setOpenMenu(true)
		setAnchorEl(evt.currentTarget)
	}
	const closeHandler = () => {
		setOpenMenu(false)
	}
	const menuItemClickHandler = (path: string) => () => {
		closeHandler()
		if(path === '/user/logout') return signOut()
		router.push(path)
	}

	return (
		<>
		<Container sx={{ 
			position: 'sticky', 
			top: 0, 
			backgroundColor: (theme) => theme.palette.common.white,
			zIndex: 1000,
			borderBottom: '.4px solid #0004'
	 }}>
			<Typography component='nav' color='textSecondary' sx={{ display: 'flex' }}>

				<Box sx={{ display: { xs: 'block', md: 'none' }}}>
					<IconButton onClick={() => setDrawerOpen(true)}>
						<MenuIcon />	
					</IconButton>
					<Drawer 
						open={drawerOpen} 
						setOpen={setDrawerOpen} 
						listItems={navItems}
					/>
				</Box>

				<Box sx={{ display: { xs: 'none', md: 'block' }}}>
					{navItems.map(({label, path}, index) => (
						<Link key={path} href={path} passHref>
							<MuiLink color='inherit' underline='none' sx={{
								':hover' : {
									// color: (theme) => theme.palette.primary.main
								}
							}}  >
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
				</Box>

				<Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
					<Switch />
					<IconButton onClick={() => router.push('/cart')}>
						<Badge badgeContent={carts.length} color='error'>
							<ShoppingCartIcon color='primary' />
						</Badge>
					</IconButton>

					{ status === 'authenticated' ? (
						<IconButton size='small' onClick={avatarClickHandler} sx={{
							minHeight: 0,
							minWidth: 0,
							padding: 0
						}}>
							<StyledAvatar src='/images/aboutAvatar.png' />
						</IconButton>
					) : (
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
					)}
				</Box>
			</Typography>
		</Container>
		<Divider />

			<AvatarMenu 
				open={openMenu}
				anchorEl={anchorEl}
				closeHandler={closeHandler}
				itemHandler={menuItemClickHandler}
				user={{
					name: 'Riajul Islam',
					avatar: '/images/aboutAvatar.png'
				}}
			/>
		</>
	)
}
export default Header
