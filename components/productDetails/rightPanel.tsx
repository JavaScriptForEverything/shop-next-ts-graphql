import { ProductDocument } from '@/shared/types'
import { AddToCart } from './addToCart'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'


type Props = {
	product: ProductDocument
}
export const RightPanel = ({ product }: Props) => {

	return (
		<>
			<Typography 
				// color='primary' 
				sx={{ textTransform: 'capitalize' }}
				variant='h6'
			>{product.name}</Typography>	
			<Typography variant='caption' color='textSecondary' paragraph>ProductId: {product.id}</Typography>	
			<Box sx={{
				display: 'flex',
				gap: 2,
				my: 2
			}}>
				<Rating 
					defaultValue={4.4}
					precision={2}
					sx={theme => ({ color: theme.palette.success.main })}
					readOnly
					size='small'
				/>
				<Typography>({5}) Reviews</Typography>	
			</Box>
			<Typography>${product.price}.00</Typography>	
			<Box sx={{ my: 2 }}> <AddToCart /> </Box>
			<Box>
				<Typography>Summary</Typography>	
				<Typography color='textSecondary'>{product.summary}</Typography>	
			</Box>
		</>
	)
}
