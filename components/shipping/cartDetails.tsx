import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'
import { shorter } from '@/util/index'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'



export const CartDetails = () => {
	const dispatch = useAppDispatch()
	const { carts, shippingCharge } = useAppSelector(state => state.layout)

	useEffect(() => {
		dispatch(layoutReducer.setShippingCharge(5))
	}, [dispatch])

	return (
		<Box>
			<Tabs value={0} >
				<Tab label='Cart Details' />
			</Tabs>

			<Box sx={{ px: { xs: 1, sm: 2 } }}>
				{carts.map(cart => (
				<Box key={cart.id} sx={{ 
					display: 'flex', 
					justifyContent: 'space-between', 
					alignItems: 'center',
					my: 1, 
					
				}}>
					<ListItemText 
						primary={shorter(cart.name)}
						secondary={shorter(cart.summary)}
						// secondary={shorter(title)}
						sx={{ mb: -.5 }}
					/>
					<Typography> ${cart.price} x {cart.quantity} </Typography>
				</Box>
				))}

				<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
					<Typography>Shipping Charge</Typography>
					<Typography>${shippingCharge}</Typography>
				</Box>

				<Divider sx={{ my: 1 }} />

				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant='h6'>Total</Typography>
					<Typography variant='h6'> ${
						carts.reduce((total, cart) => total += cart.price * cart.quantity, 0) + shippingCharge
					} </Typography>
				</Box>
			</Box>
		</Box>
	)
}
