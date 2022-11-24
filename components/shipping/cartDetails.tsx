import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'


const shorter = (content: string, length = 30): string => {
	return content.substring(0, length) + '...'
}

export const CartDetails = () => {

	const title = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illum ullam expedita id quasi consequuntur repudiandae excepturi, perferendis nesciunt assumenda necessitatibus blanditiis aliquam quisquam cupiditate numquam dolorem perspiciatis ut sunt?  "
	const subtitle = "Nisi illum ullam expedita id quasi consequuntur repudiandae excepturi, perferendis nesciunt assumenda necessitatibus blanditiis aliquam quisquam cupiditate numquam dolorem perspiciatis ut sunt?  "

	return (
		<>
		<Tabs value={0} >
			<Tab label='Cart Details' />
		</Tabs>

		{[1,2].map(item => (
		<Box key={item} sx={{ my: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<ListItemText 
				primary={shorter(title)}
				secondary={shorter(subtitle)}
				sx={{ mb: -.5 }}
			/>
			<Typography> $200.00 </Typography>
		</Box>
		))}

		<Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
			<Typography> Shipping Charge </Typography>
			<Typography> $2.00 </Typography>
		</Box>

		<Divider sx={{ my: 1 }} />

		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography variant='h6'>Total</Typography>
			<Typography variant='h6'> $402.00 </Typography>
		</Box>
		</>
	)
}
