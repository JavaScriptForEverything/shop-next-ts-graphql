import type { EditReviewTypes } from '@/pages/product/[slug]'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { ReviewDocument } from '@/shared/types'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import MuiLink from '@mui/material/Link'

import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Link from 'next/link'


const menuItems = [
	{
		label: 'Edit',
		Icon: EditIcon
	},
	{
		label: 'Delete',
		Icon: DeleteIcon
	},
]

type Props = {
	onEdit: React.Dispatch<React.SetStateAction<EditReviewTypes>>
	review: ReviewDocument
}

const ViewComment = ({ review, onEdit }: Props) => {
	const router = useRouter()
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<HTMLButtonElement|null>(null)


	const [ fields, setFields ] = useState({
		liked: review.liked,
		disliked: review.disliked
	})

	const moreVertClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget)
		setOpen(true)	
	}
	const handleMenuClose = () => {
		setAnchorEl(null)
		setOpen(false)	
	}
	const handleEditReview = () => {
		handleMenuClose()
		onEdit({
			id: review.id,
			focus: true,
			comment: review.review,
			// rating: review.rating
			rating: 5
		})
		// router.push('#ratingAndReview')
	}
	const handleDeleteReview = () => {
		handleMenuClose()
		console.log({ id: review.id })
	}


	const handleLiked = () => {
		setFields({...fields, liked: fields.liked + 1 })
	}
	const handleDisliked = () => {
		setFields({...fields, disliked: fields.disliked + 1 })
	}

	return (
		<Box sx={{ display: 'flex', gap: 2, position: 'relative' }}>
			<Avatar>
				<Image 
					src='/images/carousel/screenshot.jpg'
					alt='avatar'
					width={24}
					height={24}
					layout='fill'
				/>
			</Avatar>
			<Box sx={{ flex: 1 }}>
				<Box >
					<Box>
						<Box sx={{ display: 'flex', gap: 4 }}>
							<Typography sx={{ textTransform: 'lowercase'}}>Riajul Islam</Typography>
							<Typography color='textSecondary'>{new Date(review.createdAt).toLocaleString('en-us', {
								day: '2-digit',
								month: '2-digit',
								year: 'numeric'
							})}</Typography>
						</Box>
						<Rating 
							defaultValue={4}
							precision={.2}
							readOnly
							size='small'
							sx={theme => ({ color: theme.palette.success.main, mb: 2 })}
						/>
					</Box>

					{ true && (
					// { user.id === review.user.id && (
								<IconButton 
									sx={{ 
										border: '.2px solid #00000011',
										position: 'absolute', top: 0, right: 0, 
									}}
									onClick={moreVertClickHandler}
								> <MoreVertIcon /> </IconButton>
					)}
				</Box>

				<Typography color='textSecondary' paragraph sx={{ mr: 4 }}>{review.review}</Typography>

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

				<Divider sx={{ mb: 2, mt: 1 }} />
			</Box>

			
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleMenuClose}
			>
				<Link href='#ratingAndReview' passHref>
					<MuiLink color='inherit'>
						<MenuItem divider dense onClick={handleEditReview} >
							<ListItemIcon><EditIcon /></ListItemIcon>
							<ListItemText primary='Edit' />
						</MenuItem>
					</MuiLink>
				</Link>

				<MenuItem divider dense onClick={handleDeleteReview} >
					<ListItemIcon><DeleteIcon /></ListItemIcon>
					<ListItemText primary='Delete' />
				</MenuItem>
			</Menu>
			
		</Box>
	)
}
export default ViewComment