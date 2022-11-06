import { useState } from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import ListIcon from '@mui/icons-material/List'
import GridViewIcon from '@mui/icons-material/GridView'


export const View = () => {
	const [ viewMode, setViewMode ] = useState(false)

	const handleView = (view: boolean) => () => {
		setViewMode(view)
		console.log({ view })
	}

	return (
		<>
			<ButtonGroup>
				<Button variant={viewMode ? 'contained' : 'outlined'} onClick={handleView(true)}> <ListIcon /> </Button>	
				<Button variant={!viewMode ? 'contained' : 'outlined'} onClick={handleView(false)}> <GridViewIcon /> </Button>	
			</ButtonGroup>
		</>
	)
}
