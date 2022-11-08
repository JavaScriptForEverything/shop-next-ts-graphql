import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'


// added in rightPanel.tsx
export const AddToCart = () => {
	const [ value, setValue ] = useState(0)

	const incressHandler = () => {
		if(value >= 8) return
		setValue(value + 1)
	}
	const decreaseHandler = () => {
		if(value <= 1) return
		setValue(value - 1)
	}

	const handleAddToCart = () => {
		console.log('handle cart later')
	}

	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			gap: 1
		}}>
		 <IconButton onClick={incressHandler}><AddIcon color='success' /></IconButton>
		 {value}
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
