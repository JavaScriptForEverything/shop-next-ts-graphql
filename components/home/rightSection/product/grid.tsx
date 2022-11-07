import Link from 'next/link'
import Image from 'next/image'

import { ProductDocument } from '@/shared/types'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MuiLink from '@mui/material/Link'
import Rating from '@mui/material/Rating'


type Props = {
	product: ProductDocument
}
export const ProductGridView = ({ product }: Props) => {

	return (
		<Card>
			<Image 
				// src='/images/carousel/screenshot (5th copy).jpg'
				src={product.coverPhoto}
				alt='image'
				width={300}
				height={200}
				layout='responsive'
			/>
			<CardContent>
				<Link href={`/product/${product.slug}`} passHref>
					<MuiLink>
						<Typography >{product.name}</Typography>
					</MuiLink>
				</Link>
				<Rating 
					value={+3.33333333['toFixed'](2)}
					precision={.2}
				/>
				<Typography variant='h5'>${product.price}.00</Typography>

				<Box sx={{ mt: 4 }}>
					<Link href={`/product/${product.slug}`} passHref>
						<MuiLink>
							<Button variant='contained' fullWidth>Add To Cart</Button>
						</MuiLink>
					</Link>
				</Box>
			</CardContent>
		</Card>
	)
}
