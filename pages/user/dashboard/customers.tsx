// import { useState } from 'react'

import { FilterContainer, SearchBar } from '@/components/user/dashboard/page/products'
import { withDashboardPanel } from '@/shared/hoc'
import { CustomerTable } from '@/components/user/dashboard/page/customers'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'




const Customer = () => {
	// const [ isAddProduct, setIsAddProduct ] = useState(true)

	const showAddProduct = () => {
		// setIsAddProduct(true)
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
					title='Add Customer'
					onClickAddProduct={showAddProduct} 
				/>
			</Paper>

			<Paper sx={{ my: 1, p: 1 }}>
				<CustomerTable 
					title='All Customers'
					customers={[]}
				/> 
			</Paper>

		</Box>
	)
}
export default withDashboardPanel(Customer)

