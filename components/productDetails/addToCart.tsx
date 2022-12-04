import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'
import * as productReducer from '@/store/productReducer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'


// added in rightPanel.tsx
export const AddToCart = () => {
	const dispatch = useAppDispatch()
	const { product } = useAppSelector( state => state.product )

	const incressHandler = () => {
		dispatch(productReducer.increaseQuantity())
	}
	const decreaseHandler = () => {
		dispatch(productReducer.decreaseQuantity())
	}

	const handleAddToCart = () => {
		dispatch(layoutReducer.addToCart(product))
	}

	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			gap: 1
		}}>
		 <IconButton onClick={incressHandler}><AddIcon color='success' /></IconButton>
		 {product.quantity}
		 <IconButton onClick={decreaseHandler}><RemoveIcon color='error' /></IconButton>
		 <Button 
				variant='contained'
				sx={{ textTransform: 'capitalize' }}
				size='small'
				onClick={handleAddToCart}
		 >Add To Cart</Button>
			
		</Box>
	)
}
