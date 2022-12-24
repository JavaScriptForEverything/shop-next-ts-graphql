import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import FilterIcon from '@mui/icons-material/FilterAltOutlined'
import AddIcon from '@mui/icons-material/AddCircleOutline'

const filterItems = [ 'rating', 'price', 'category' ]

type Props = {
	title?: string,
	onClickAddProduct: () => void
}

export const FilterContainer = ({ onClickAddProduct, title='Add Product' }: Props) => {
	const [ selectedFilter, setSelectedFilter ] = useState(0)

	const filterHandler = (index: number) => () => {
		setSelectedFilter(index)  
	}

	return (
		<Box sx={{ 
			display: 'flex',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			gap: 2
		 }}>
			<Box sx={{ display: 'flex', gap: .4, flexWrap: 'wrap' }}>
				{filterItems.map( (item, index) => (
					<Button key={item}
						variant={ selectedFilter === index ? 'contained' : 'outlined' }
						startIcon={<FilterIcon />}
						size='small'
						sx={{ textTransform: 'capitalize' }}
						onClick={filterHandler(index)}
					>{item}</Button>
				))}
			</Box>

			<Box>
				<Button 
					variant={'contained'}
					startIcon={<AddIcon />}
					size='small'
					sx={{ textTransform: 'capitalize' }}
					onClick={onClickAddProduct}
				>{title}</Button>
			</Box>
		</Box>
	)
}
