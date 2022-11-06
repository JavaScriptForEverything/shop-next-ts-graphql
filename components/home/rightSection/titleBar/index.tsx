import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FilterBy } from './filterBy'
import { View } from './view'

export const TitleBar = () => {

	return (
		<>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}>
				<Typography>3 tiems found</Typography>
				<FilterBy />
				<View />
			</Box>
		</>
	)
}
