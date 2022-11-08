import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import LinearProgress from '@mui/material/LinearProgress'

export const RatingAndReviews = () => {

	return (
		<Box sx={{
			display: 'flex',
			gap: 4
		}}>
			<Box>
				<Typography variant='h3'>4.00</Typography>
				<Rating 
					defaultValue={4}
					precision={2}
					readOnly
					sx={theme => ({ color: theme.palette.success.main })}
					size='small'
				/>
			</Box>

			<Box sx={{ width: '100%' }}>
				{[1,2,3,4,5].reverse().map(item => (
				<Box key={item} sx={{ 
					width: '100%',
					display: 'flex',
					alignItems: 'baseline',
					gap: 2
				}}>
					<Typography>{item}</Typography>
					<Box sx={{ width: '100%' }}>
						<LinearProgress 
							variant='determinate'
							value={item * 20}
							color='success'
						/>
					</Box>
				</Box>
				))}

		</Box>
	</Box>
	)
}
