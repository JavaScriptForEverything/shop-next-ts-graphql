import type { ProductDocument } from '@/shared/types'

import Link from 'next/link'
import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'
import { shorter } from '@/util/index'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'
import Rating from '@mui/material/Rating'
import FormHelperText from '@mui/material/FormHelperText'

type Props = {
	product: ProductDocument
}
export const ListViewProduct = ({ product }: Props) => {
	const dispatch = useAppDispatch()
	const { error } = useAppSelector(state => state.layout)

	const addToCartHandler = (product: ProductDocument) => () => {
		dispatch(layoutReducer.addToCart(product))
	}

	return (
		<>
			<Box sx={{
				display: 'flex',
				minHeight: 100
			}}>
				<Box sx={{ flex: 1, position: 'relative' }}>
					<Image 
						src={product.coverPhoto}
						alt={product.name}
						layout='fill'
						// width={100}
						// height={100}
					/>
				</Box>
				<Box sx={{ flex: 3, px: 2 }}>
					<Box sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
						<Link href={`/product/${product.slug}`} passHref>
							<MuiLink>
								<Typography>{shorter(product.name, 25)}</Typography>
							</MuiLink>
						</Link>
						<Typography>${product.price}.00</Typography>
					</Box>

					<Rating 
						name={product.name}
						precision={.2}
						defaultValue={product.rating}
						size='small'
					/>
					<Typography 
						color='textSecondary'
						variant='body2'
						sx={{ mt: 1, mb: 2 }}
					>{product.summary}</Typography>

					<Box sx={{
						mb: 2
					}}>
						<Button 
							variant='contained'
							size='small'
							onClick={addToCartHandler(product)}
						>Add To Cart</Button>
					</Box>

				</Box>
			</Box>
		</>
	)
}
