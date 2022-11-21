import Image from 'next/image'
import { useRouter } from 'next/router'

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


const cartItems = [
	{
		_id: '1',
		image: '/images/carousel/screenshot-1.jpg',
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ratione quaerat quasi cum.",
		quantity: 2,
		price: 24.00,
	},
	{
		_id: '2',
		image: '/images/carousel/screenshot-2.jpg',
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ratione quaerat quasi cum.",
		quantity: 3,
		price: 42.00,
	},
	{
		_id: '3',
		image: '/images/carousel/screenshot-3.jpg',
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ratione quaerat quasi cum.",
		quantity: 5,
		price: 44.00,
	},
	{
		_id: '4',
		image: '/images/carousel/screenshot-4.jpg',
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ratione quaerat quasi cum.",
		quantity: 4,
		price: 20.00,
	},
]








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

	const plusHandler = () => {
		console.log('plus')
	}
	const minusHandler = () => {
		console.log('minus')
	}
	const deleteHandler = (cartId: string) => () => {
		console.log({ cartId })
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
									<TableCell align='center'>Quentaty</TableCell>
									<TableCell>Price</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{cartItems.map( cart => (
								<TableRow key={cart._id}>
									<TableCell sx={{ position: 'relative' }}>
										<Image 
											src={cart.image}
											alt={cart.title}
											layout='fill'
										/>
									</TableCell>
									<TableCell {...hiddenStyle}>{cart.title}</TableCell>
									<TableCell align='center'>
										<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }} >
											<IconButton color='success' onClick={plusHandler}> <AddIcon /> </IconButton>
											{cart.quantity}
											<IconButton color='error' onClick={minusHandler}> <RemoveIcon /> </IconButton>
										</Box>
									</TableCell>
									<TableCell>{cart.price}</TableCell>
									<TableCell>
										<IconButton onClick={deleteHandler(cart._id)}> <DeleteIcon /> </IconButton>
									</TableCell>
								</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</Grid>

				<Grid item xs={12} md={4}>
					<Paper sx={{ p: 2 }}>
						<Typography variant='h6' paragraph>Total (1 items): $32.00 </Typography>
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
