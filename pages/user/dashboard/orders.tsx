import { useState } from 'react'

import { FilterContainer, SearchBar } from '@/components/user/dashboard/page/products'
import { withDashboardPanel } from '@/shared/hoc'
import { OrderTable } from '@/components/user/dashboard/page/orders'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'






const Orders = () => {
	const [ isAddProduct, setIsAddProduct ] = useState(true)

	const showAddProduct = () => {
		setIsAddProduct(true)
	}

	return (
		<Box>
			<Grid container justifyContent='flex-end'>
				<Grid item xs={12} sm={6} md={4}>
					<SearchBar />
				</Grid>
			</Grid>

			<Paper sx={{ my: 1, p: 1, }}>
				<FilterContainer 
					title='Add Order'
					onClickAddProduct={showAddProduct} 
				/>
			</Paper>

			<Paper sx={{ my: 1, p: 1 }}>
				<OrderTable /> 
			</Paper>

		</Box>
	)
}
export default withDashboardPanel(Orders)

