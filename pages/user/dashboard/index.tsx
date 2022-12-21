import { withDashboardPanel } from '@/shared/hoc'
import { PiStatus, WebGraph, RevinueGraph, TopProducts } from '@/components/user/dashboard/page/dashboard'
import { OrderTable } from '@/components/user/dashboard/page/orders'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

export type TopProductItem = {
	avatar: string,
	title: string,
	subheader: string,
	price: number,
}

const topItems = [
	{
		title: `Total Products`,
		value: 200,
		graph: 'Product Graph Component'
	},
	{
		title: `Today's Orders`,
		value: 20,
		graph: 'Order Graph Component'
	},
	{
		title: `Today's Review`,
		value: 300,
		graph: 'Revies Graph Component'
	},
	{
		title: `Today's Visitors`,
		value: 400,
		graph: 'Visitor Graph Component'
	},
]

const topProductsListItems: TopProductItem[] = [
	{ avatar: '/images/aboutAvatar.png', title: 'Best Shirt', subheader: 'Shirt', price: 432 },
	{ avatar: '/images/aboutAvatar.png', title: 'Fit Shirt', 	subheader: 'Shirt', price: 423 },
	{ avatar: '/images/aboutAvatar.png', title: 'Polo Shirt', subheader: 'Shirt', price: 342 },
	{ avatar: '/images/aboutAvatar.png', title: 'Git Shirt', 	subheader: 'Shirt', price: 324 },
]


const DashboardHome = () => {

	return (
		<Box>
			<Box sx={{
				display: 'grid',
				gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' },
				gridGap: 2*8
			}}>
				{topItems.map(item => (
					<Paper key={item.title} sx={{ p: 1 }}>
						<WebGraph 
							title={item.title}
							value={item.value}
						/>
					</Paper>
				))}
			</Box>

			<Box sx={{
				mt: 2, 
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				gap: 2
			}}>
				<Paper sx={{ p: 1, flex: 2.5 }}>
					<RevinueGraph 
						year={200}
						onChange={() => {}}
					/>
				</Paper>
				<Paper sx={{ p: 1, flex: 1 }}>
					<TopProducts 
						title='Top Products'
						items={topProductsListItems}
						select={0}
						onClick={() => {}}
					/>
				</Paper>
			</Box>

			<Box sx={{
				mt: 2, 
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				gap: 2
			}}>
				<Paper sx={{ p: 1, flex: 1 }}> <PiStatus /> </Paper>
				<Paper sx={{ p: 1, flex: 2.5 }}> <OrderTable /> </Paper>
			</Box>
		</Box>
	)
}
export default withDashboardPanel( DashboardHome )

