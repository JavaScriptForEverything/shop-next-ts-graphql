import Image from 'next/image'
import { useState } from 'react'

import { ReviewDocument } from '@/shared/types'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import IconButton from '@mui/material/IconButton'

import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined'


type Props = {
	review: ReviewDocument
}

const Comment = ({ review }: Props) => {
	const [ fields, setFields ] = useState({
		liked: review.liked,
		disliked: review.disliked
	})
	const handleLiked = () => {
		setFields({...fields, liked: fields.liked + 1 })
	}
	const handleDisliked = () => {
		setFields({...fields, disliked: fields.disliked + 1 })
	}

	return (
		<Box sx={{ display: 'flex', gap: 2 }}>
			<Avatar>
				<Image 
					src='/images/carousel/screenshot.jpg'
					alt='avatar'
					width={24}
					height={24}
					layout='fill'
				/>
			</Avatar>
			<Box>
				<Box sx={{ display: 'flex', gap: 4 }}>
					<Typography>Riajul Islam</Typography>
					<Typography color='textSecondary'>{review.createdAt.toDateString()}</Typography>
				</Box>
				<Rating 
					defaultValue={4}
					precision={.2}
					readOnly
					size='small'
					sx={theme => ({ color: theme.palette.success.main, mb: 2 })}
				/>
				<Typography color='textSecondary' paragraph>{review.review}</Typography>

				<Box sx={{ display: 'flex', gap: 2 }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton onClick={handleLiked}><ThumbUpIcon /></IconButton>
						{fields.liked}
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton onClick={handleDisliked}><ThumbDownIcon /></IconButton>
						{fields.disliked}
					</Box>
				</Box>
			</Box>
			
		</Box>
	)
}
export default Comment