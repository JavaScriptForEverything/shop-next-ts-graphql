import Link from 'next/link'

import { FilterBrands, FilterPrice, FilterRating, FilterSize } from '@/components/home/leftPanel'
import { TitleBar, ProductContainer } from '@/components/home/rightSection'
import { SearchBar } from '@/components/home'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'


const navItems = [
	{ label: 'Login', path: '/login' },
	{ label: 'Signup', path: '/signup' },
	{ label: 'User', path: '/user' },
]

const Home = () => {

	return (
		<>

		<Box sx={{
			display: 'flex',
			justifyContent: 'flex-end',
			my: 2
		}} >
			<SearchBar />
		</Box>

			<Grid container spacing={2}>
				<Grid item xs={3} md={3}>
					<Paper>
						<FilterRating />
						<FilterBrands />
						<FilterPrice />
						<FilterSize />
					</Paper>
				</Grid>

				<Grid item xs={9} md={9}>
					<TitleBar />
					<Paper>
					<ProductContainer />
					</Paper>
				</Grid>
			</Grid>


		</>
	)
}
export default Home
