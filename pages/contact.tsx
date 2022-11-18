import * as myData from '@/data/client/me'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'


const contactArrayObject = [
	{
		title: 'Mobile:',
		description: '+8801957500605'
	},
	{
		title: 'Email:',
		description: 'JavascriptForEverything@gmail.com'
	},
	{
		title: 'WhatsApp:',
		description: '01957500605'
	},
]


const Contact = () => {

	const center = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}

	return (
		<Grid container>
			<Grid item xs={12}>
				<Box sx={center}>
					<Typography variant='h6'> Contact Us </Typography>
					<Typography variant='body2'>Anyone can contact up via bellow methods</Typography>
					<Divider sx={{ my: 2, width: 400, maxWidth: 600 }} />
				</Box>

				<Box sx={center} >
					<Box sx={{ mt: 2, px: 2 }}>
						{contactArrayObject.map(({ title, description}) => (
							<Box key={title} sx={{ mb: 2 }}>
								<Typography variant='body1'> {title} </Typography>
								<Typography variant='body2' color='textSecondary'> {description} </Typography>
							</Box>
						))}
					</Box>

					<Box sx={{ mb: 2 }}>
						<Typography variant='body1'> Social Media: </Typography>
						<Box>
						{ myData.socialMediaItems.map(({ label, Icon, path }) => (
							<IconButton key={label} color='inherit'>
								<Tooltip title={label}>
									<MuiLink href={path} target='_blank' color='inherit'><Icon /></MuiLink>
								</Tooltip>
							</IconButton>
						))}
						</Box>
					</Box>
				</Box>

			</Grid>
		</Grid>
	)
}
export default Contact
