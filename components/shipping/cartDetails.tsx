import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'


const shorter = (content: string, length = 30): string => {
	if(content.length <= length) return content

	return content.substring(0, length) + '...'
}

export const CartDetails = () => {
	const dispatch = useAppDispatch()
	const { carts, shippingCharge } = useAppSelector(state => state.layout)

	useEffect(() => {
		dispatch(layoutReducer.setShippingCharge(5))
	}, [dispatch])

	return (
		<>
		<Tabs value={0} >
			<Tab label='Cart Details' />
		</Tabs>

		{carts.map(cart => (
		<Box key={cart.id} sx={{ my: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
		</>
	)
}
