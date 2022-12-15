import Image from 'next/image'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import { EditReviewTypes } from '@/pages/product/[slug]'

type InitialFields = {
	id: string,
	rating: number | null,
	comment: string,
	focus: boolean
}
const initialFields: InitialFields = {
	id: '',
	rating: 0,
	comment: '',
	focus: false
}

type Props = {
	editReview: React.SetStateAction<EditReviewTypes>
}
const AddComment = ({ editReview }: Props) => {
	const [ fields, setFields ] = useState(initialFields)
	const [ commentText, setCommentText ] = useState('Comment')

	// put selected review if edit review clicked
	useEffect(() => {
		setFields(editReview)
		setCommentText('Update')
	}, [editReview])

	const handleReset = () => {
		setFields(initialFields)
		setCommentText('Comment')
	}

	const ratingChangeHandler = (_: any, newRating: number|null) => {
		setFields({ ...fields, rating: newRating })
	}
	const commentChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, comment: evt.target.value })
	}
	
	const handleSubmit = () => {
		console.log(fields)
	}

	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			gap: 4,
		}}>
			<Avatar>
				<Image 
					src='/images/carousel/screenshot.jpg'
					alt='user avatar'
					width={20}
					height={20}
					layout='fill'
				/>
			</Avatar>

			{/* flex: 1, 		// child item must deside how much it need, esle it use only text-size */}
			<Box sx={{ flex: 1 }}>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1
				}}>
					<TextField 
						variant='standard'
						fullWidth
						onFocus={() => setFields({ ...fields, focus: true })}
						value={fields.comment}
						onChange={commentChangeHandler}
					/>
					{fields.focus && (
						<Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
							<Rating 
								name='commentRating'
								sx={{ color: 'green' }}
								precision={.2}
								value={fields.rating}
								onChange={ratingChangeHandler}
							/>
							<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
								<Button variant='outlined' onClick={handleReset}>Reset</Button>
								<Button variant='contained' onClick={handleSubmit}>{commentText}</Button>
							</Box>
						</Box>
					)} 
				</Box>
			</Box>
		</Box>
	)
}
export default AddComment