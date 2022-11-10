import Link from 'next/link'
import dynamic from 'next/dynamic'

import Section from './footer/section'

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'


const sectionItems = [
	{ title: 'HashTAG', Component: dynamic(() => import('./footer/hashTag')) },
	{ title: 'Contact',  Component: dynamic(() => import('./footer/contact')) },
	{ title: 'About Us',  Component: dynamic(() => import('./footer/aboutUs')) },
	{ title: 'Social Media',  Component: dynamic(() => import('./footer/socialMedia')) },
]

const siteLinks = [
	{ label: 'api', path: 'http://localhost:3000/api/graphql' },
	{ label: 'home', path: '/' },
	{ label: 'about', path: '/about' },
	{ label: 'contact', path: '/contact' },
	{ label: 'docs', path: '/docs' },
	{ label: 'login', path: '/login' },
	{ label: 'signup', path: '/signup' },
	{ label: 'profile', path: '/user/profile' },
	{ label: 'dashboard', path: '/user/dashboard' },
]

const Footer = () => {

	return (
		<>
		<CssBaseline />
		<Box sx={{ backgroundColor: '#282828', color: '#f9f9f9d0', mt: 6 }} >

			<Container>
				<Grid container spacing={3}>
					{sectionItems.map( ({ title, Component }) => (
					<Grid key={title} item xs={12} sm={6} md={3} >
						<Section title={title}>
							<Component />
						</Section>
					</Grid>
					))}
				</Grid>

				<Divider sx={{my: 3, borderBottom: '1px solid gray'}} />

				<Grid container>
					<Grid item xs={12} md={4} >
						<Typography variant='h6' paragraph>Site Links:</Typography>
						<Box sx={{
							display: 'flex',
							gap: 1,
							flexWrap: 'wrap'
						}}>
							{siteLinks.map(({ label, path }) => (
								<Link key={label} href={path} passHref>
									<MuiLink> {label} </MuiLink>
								</Link>
							))}
						</Box>
					</Grid>
				</Grid>
			</Container>

			<Typography component='section' align='center' sx={{
				backgroundColor: '#18181888',
				mt: 3,
				py: 1
			}}> All Right Reserved &copy;HashTAG </Typography>
		</Box>
		</>
	)
}
export default Footer
