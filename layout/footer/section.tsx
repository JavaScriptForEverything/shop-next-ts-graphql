import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'


type Props = {
	title?: string
	children: React.ReactElement
}

const Section = ({ title='', children }: Props) => (
	<Box>
		<Box sx={{
			display: 'flex',
			gap: 1,
			alignItems: 'baseline',
			borderBottom: '1px dashed white',
			pb: 1,
			my: 2
		}}>
			<Typography sx={{whiteSpace: 'nowrap'}}> {title} </Typography>
			<Box sx={{
				height: 10,
				width: '100vw',
				backgroundImage: 'repeating-linear-gradient(-45deg, gray 0px 1px, white 2px 3px )'
			}} />
		</Box>

		{children}
	</Box>
)

export default Section
