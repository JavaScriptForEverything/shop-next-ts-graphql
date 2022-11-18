import Link from 'next/link'

import { FilterBrands, FilterPrice, FilterRating, FilterSize } from '@/components/home/leftPanel'
import { TitleBar, ProductContainer } from '@/components/home/rightSection'
import SearchBar from '@/components/home/searchBar'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'



const Home = () => {

	return (
		<>

		<Grid container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
			<Grid item xs={12} sm={6} md={3}>
				<SearchBar />
			</Grid>
		</Grid>

			<Grid container spacing={2}>
				<Grid item xs={12} md={3} sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1
				}}>
					<Paper> <FilterRating /> </Paper>
					<Paper> <FilterBrands /> </Paper>
					<Paper> <FilterPrice /> </Paper>
					<Paper> <FilterSize /> </Paper>
				</Grid>

				<Grid item xs={12} md={9}>
					<TitleBar />
					<Box sx={{ my: 1 }}>
					<ProductContainer />
					</Box>
				</Grid>
			</Grid>


		</>
	)
}
export default Home
