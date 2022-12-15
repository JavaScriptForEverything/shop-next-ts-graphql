import Image from 'next/image'
import { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'

type InitialFields = {
	rating: number | null,
	comment: string
}
const initialFields: InitialFields = {
	rating: 0,
	comment: ''
}

const AddComment = () => {
	const [ isFocus, setIsFocus ] = useState(false)
	const [ fields, setFields ] = useState(initialFields)

	const handleReset = () => setIsFocus(false)
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
						onFocus={() => setIsFocus(true)}
						value={fields.comment}
						onChange={commentChangeHandler}
					/>
					{isFocus && (
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
								<Button variant='contained' onClick={handleSubmit}>Comment</Button>
							</Box>
						</Box>
					)} 
				</Box>
			</Box>
		</Box>
	)
}
export default AddComment