import type { ViewMode } from '@/shared/types/layout'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import ListIcon from '@mui/icons-material/List'
import GridViewIcon from '@mui/icons-material/GridView'


export const View = () => {
	const dispatch = useAppDispatch()
	const { viewMode } = useAppSelector(state => state.layout)

	const handleView = (viewMode: ViewMode) => () => {
		dispatch(layoutReducer.setViewMode(viewMode))
	}

	return (
		<>
			<ButtonGroup>
				<Button variant={viewMode === 'list' ? 'contained' : 'outlined'} onClick={handleView('list')}> <ListIcon /> </Button>	
				<Button variant={viewMode === 'grid' ? 'contained' : 'outlined'} onClick={handleView('grid')}> <GridViewIcon /> </Button>	
			</ButtonGroup>
		</>
	)
}
