import { brands } from '@/data/client/filterBy'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export const FilterBrands = () => {

	return (
		<Accordion defaultExpanded={false}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>Brand</AccordionSummary>
			<AccordionDetails>
				<List>
					{brands.map(brand => (
					<ListItem key={brand} button>
						<ListItemIcon>
							<FormControlLabel
								label={<ListItemText primary={brand} />}
								control={<Checkbox 
									checked={true}
									onChange={() => {}}
								/>}								
							/>
						</ListItemIcon>
					</ListItem>
					))}
				</List>
			</AccordionDetails>
		</Accordion>
	)
}
