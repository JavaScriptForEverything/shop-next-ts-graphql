import { useState } from 'react'

import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const marks = [
	{ value: 10, label: '10' },
	{ value: 20, label: '20' },
	{ value: 30, label: '30' },
]

export const FilterPrice = () => {
	const [ value, setValue ] = useState<number|number[]>(10)

	return (
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>Price Range</AccordionSummary>
			<AccordionDetails>
				<Slider 
					// step={10}
					marks={marks}
					value={value}
					onChange={(evt, newValue) => setValue(newValue)}
					valueLabelDisplay='auto'
				/>

				<Box sx={{ mt: 4 }}>
					<Button variant='contained'>Apply</Button>
				</Box>
			</AccordionDetails>
		</Accordion>
	)
}
