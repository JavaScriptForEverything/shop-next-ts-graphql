import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

const user = {
	name: 'riajul islam',
	title: 'Next.js + TypeScript + GraphQL',
	summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum iste similique aliquam ducimus voluptate omnis doloremque facilis quis, nisi, ea in recusandae repellat natus vel veniam porro assumenda voluptas!'
}

const UserSummary = () => {

	return (
		<>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
				<Avatar src='/images/aboutAvatar.png' sx={{ 
					width: 100, 
					height: 100,
					border: '1px solid #00000022'
				}} />
				<Typography variant='subtitle1' color='primary' sx={{
					textTransform: 'capitalize'
				}}>{user.name}</Typography>
				<Typography variant='caption'>{user.title}</Typography>
			</Box>
			<Typography color='textSecondary' align='justify' sx={{ my: 2, p: 1 }}>
				{user.summary}
			</Typography>
		</>
	)
}
export default UserSummary