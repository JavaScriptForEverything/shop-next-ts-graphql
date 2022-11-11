import { useState } from 'react'
import type { Experience } from '@/server/models/userModel'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


type Props = {
	experiences: Experience[]
}

export const UserExperience = ({ experiences }: Props) => {
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<null|HTMLButtonElement>(null)
	const [ jobId, setJobId ] = useState('')

	const closeHandler = () => {
		setOpen(false)
	}
	const clickHandler = (id: string) => (evt: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget)
		setOpen(true)
		setJobId(id)
	}

	const editHandler = () => {
		closeHandler()
		console.log('Edit handler', { jobId })
	}
	const deleteHandler = () => {
		closeHandler()
		console.log('Delete handler', { jobId })
	}

	return (
		<>
		{experiences.map(job => (
			<Box key={job._id} sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				my: 2
			}}>

			<Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
				<Avatar sx={{ width: 70, height: 70, backgroundColor: job.logoBackgroundColor }}>
					{job.companyName.split(' ').map(item => item[0]).join('').toUpperCase()}
				</Avatar>	

				<Box>
					<Typography variant='h6' color='primary' sx={{ mb: 1, textTransform: 'capitalize' }}>
						{job.companyName}
					</Typography>

					<Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>
						{job.title}
					</Typography>

					<Typography variant='caption' color='textSecondary' sx={{ textTransform: 'capitalize' }}>
						{ new Date(job.joiningDate).toLocaleString('en-us', {
							year: 'numeric',
							month: 'short'
						})} - {job.currentStatus} | {job.jobLocation}
					</Typography>

					<Divider />
				</Box>
			</Box>

				<IconButton onClick={clickHandler(job._id)}>
					<MoreVertIcon />
				</IconButton>
			</Box>
		))}	


				<Menu
					open={open}
					anchorEl={anchorEl}
					onClose={closeHandler}
				>
					<MenuItem dense divider onClick={editHandler} >
						<ListItemIcon><EditIcon /></ListItemIcon>
						<ListItemText primary='Edit' />
					</MenuItem>

					<MenuItem dense divider onClick={deleteHandler} >
						<ListItemIcon><DeleteIcon /></ListItemIcon>
						<ListItemText primary='Delete' />
					</MenuItem>
				</Menu>

		</>
	)
}
