import { useAppSelector } from '@/store/hooks'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FilterBy } from './filterBy'
import { View } from './view'

export const TitleBar = () => {

	const { products } = useAppSelector(state => state.product)

	return (
		<>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				my: 2
			}}>
				<Typography>{products.length} tiems found</Typography>
				<FilterBy />
				<View />
			</Box>
		</>
	)
}
