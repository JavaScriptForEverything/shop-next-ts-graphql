import { useState } from 'react'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { Types } from 'mongoose'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'
import { useAppSelector } from '@/store/hooks'

import type { Experience } from '@/shared/types'
import UserExperience from '@/components/user/profile/userExperience'
import AddNote from '@/components/user/profile/addNote'
import Section from '@/components/user/profile/sectionHeading'
import UserSummary from '@/components/user/profile/userSummary'

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
const experiences: Experience[] = [
	{
		_id: new Types.ObjectId(),
		title: 'fullstack web developer',
		companyName: 'pixel studio',
		joiningDate: new Date(),
		currentStatus: 'active',
		jobLocation: 'dhaka, bangladesh',
		logoBackgroundColor: 'red'
	},
	{
		_id: new Types.ObjectId(),
		title: 'MERN web developer',
		companyName: 'Ayman Group',
		joiningDate: new Date(),
		currentStatus: 'inactive',
		jobLocation: 'dhaka, bangladesh',
		logoBackgroundColor: 'dodgerblue'
	}
]

const Profile = ({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const [ isAdded, setIsAdded ] = useState(false)

	// const { user } = useAppSelector(state => state.user)
	// console.log(user)

	console.log({ session })

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
								experiences={experiences} 
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


export const getServerSideProps = async ({ req, res }: GetServerSidePropsContext) => {

	const session = await unstable_getServerSession(req, res, authOptions)
	// const data = await getSession({ req })
	console.log('from /user/profile: ', session)

	if(!session) return {
		redirect: {
			destination: '/login',
			parmanent: false
		}
	}

	return {
		props: {
			session
		}
	}
}