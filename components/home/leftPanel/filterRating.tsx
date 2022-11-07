import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Rating from '@mui/material/Rating'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export const FilterRating = () => {

	return (
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>Rating</AccordionSummary>
			<AccordionDetails>
				<List>
				{[1,2,3,4,5].reverse().map(item => (
					<ListItem key={item} button dense>
						<ListItemText primary={<Rating value={item} readOnly />} />
					</ListItem>
				))}
				</List>
			</AccordionDetails>
		</Accordion>
	)
}
