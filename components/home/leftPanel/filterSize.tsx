import { useState } from 'react'

import { sizes } from '@/data/client/filterBy'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const FilterSize = () => {
	const [ selected, setSelected ] = useState(0)

	return (
		<Accordion defaultExpanded={false}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>Size</AccordionSummary>
			<AccordionDetails>
				<ButtonGroup>
					{sizes.map(( size, index ) => (
						<Button key={size} 
							variant={index === selected ? 'contained' : 'outlined'}
							onClick={() => setSelected(index)}
						>{size}</Button>
					))}
				</ButtonGroup>
			</AccordionDetails>
		</Accordion>
	)
}
