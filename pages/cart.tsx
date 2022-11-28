import Image from 'next/image'
import type { ProductDocument } from '@/shared/types'
import { useRouter } from 'next/router'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'



const hiddenStyle = {
	colSpan: 2,
	sx: { 
		display: { 
			xs: 'none', 
			sm: 'table-cell' 
		}
	}
}

const Cart = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const { carts } = useAppSelector(state => state.layout)

	const plusHandler = (cartId: string) => () => {
		dispatch(layoutReducer.increaseQuantity(cartId))
	}
	const minusHandler = (cartId: string) => () => {
		dispatch(layoutReducer.decreaseQuantity(cartId))
	}
	const deleteHandler = (cartId: string) => () => {
		dispatch(layoutReducer.removeFromCarts(cartId))
	}

	return (
		<>
			<Typography variant='h6' paragraph color='primary'>Cart Page</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} md={8}>
					<Paper>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Image</TableCell>
									<TableCell {...hiddenStyle} >Product Name</TableCell>
									<TableCell align='center'>Quantaty</TableCell>
									<TableCell>Price</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{carts.map( cart => (
								<TableRow key={cart.id}>
									<TableCell sx={{ position: 'relative' }}>
										<Image 
											src={cart.coverPhoto}
											alt={cart.name}
											layout='fill'
										/>
									</TableCell>
									<TableCell {...hiddenStyle}>{cart.name}</TableCell>
									<TableCell align='center'>
										<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }} >
											<IconButton color='success' onClick={plusHandler(cart.id)}> <AddIcon /> </IconButton>
											{cart.quantity}
											<IconButton color='error' onClick={minusHandler(cart.id)}> <RemoveIcon /> </IconButton>
										</Box>
									</TableCell>
									<TableCell>{cart.price}</TableCell>
									<TableCell>
										<IconButton onClick={deleteHandler(cart.id)}> <DeleteIcon /> </IconButton>
									</TableCell>
								</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</Grid>

				<Grid item xs={12} md={4}>
					<Paper sx={{ p: 2 }}>
						<Typography variant='h6' paragraph>Total ({carts.length} items): ${
							carts
								.reduce( (total, cart) => total += cart.price * cart.quantity , 0)
								.toFixed(2)
						} </Typography>
						<Button
							variant='contained'
							fullWidth
							onClick={() => router.push('/shipping')}
						>Checkout</Button>
					</Paper>
				</Grid>
			</Grid>


		</>
	)
}
export default Cart
