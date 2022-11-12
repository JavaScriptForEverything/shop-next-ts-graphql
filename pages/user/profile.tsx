import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'

import type { Experience } from '@/shared/types'
import { AddNote, Section, UserSummary, UserExperience } from '@/components/user/profile'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import AddIcon from '@mui/icons-material/Add'


const skills = [ 'Next.js', 'TypeScript', 'GraphQL', 'React', 'redux', 'Mongoose', 'Express.js' ]
const infoItems = [
	{ name: 'Age', value: '28' },
	{ name: `Years of Experience`, value: '6' },
	{ name: 'Phone', value: '01957500605' },
	{ name: 'CTC', value: '2.5' },
	{ name: 'Address', value: 'Dhaka, Bangladesh' },
	{ name: 'Email', value: 'JavaScriptForEverything@gmail.com' },
]
// const experiences: Experience[] = [
// 	{
// 		_id: '1',
// 		title: 'fullstack web developer',
// 		companyName: 'pixel studio',
// 		joiningDate: new Date(),
// 		currentStatus: 'active',
// 		jobLocation: 'dhaka, bangladesh',
// 		logoBackgroundColor: 'red'
// 	},
// 	{
// 		_id: '2',
// 		title: 'MERN web developer',
// 		companyName: 'Ayman Group',
// 		joiningDate: new Date(),
// 		currentStatus: 'inactive',
// 		jobLocation: 'dhaka, bangladesh',
// 		logoBackgroundColor: 'dodgerblue'
// 	}
// ]

const Profile = () => {
	const [ isAdded, setIsAdded ] = useState(false)

	const { user } = useAppSelector(state => state.user)
	console.log(user)

	if(!user) return <>No User, loading ...</>


	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<Paper sx={{ p: 1 }}>
						<UserSummary />

						<Section 
							title='Skills' 
							onClick={f => f}
						>
							<Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
								{skills.map( skill => <Chip key={skill}
									label={skill}
									variant='outlined'
									onClick={e => e}
									size='small'
								/>
							)}
							</Box>
						</Section>

						<Box sx={{ mt: 2, mb: 1 }}> <AddNote /> </Box>

					</Paper>
				</Grid>
				
				{/* -----[ Right Side ]----- */}
				<Grid item xs={12} md={8}>
					<Paper sx={{ p: 1 }}>
						<Section 
							title='Basic Information' 
							onClick={f => f}
						>
							<Box sx={{
								display: 'grid',
								gridTemplateColumns: { xs: 'Repeat(2, 1fr)', md: 'Repeat(3, 1fr)' },
								rowGap: 2
							}} >
								{infoItems.map(({ name, value }) => (
									<Box key={name}>
										<Typography>{name}</Typography>
										<Typography color='textSecondary'>{value}</Typography>
									</Box>
								))}
							</Box>
						</Section>
					</Paper>


					<Paper sx={{ my: 2, p: 1 }}>
						<Section 
							title='Experiences'
							icon={<AddIcon color='action' />} 
							onClick={() => setIsAdded(!isAdded)}
							isRotate={isAdded}
						>
							<UserExperience 
								experiences={user.experiences} 
								isAdded={isAdded}
							/>
						</Section>
					</Paper>

				</Grid>
			</Grid>
		</>
	)
}
export default Profile

