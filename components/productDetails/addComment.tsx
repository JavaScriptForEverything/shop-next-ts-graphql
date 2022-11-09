import Image from 'next/image'
import { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

export const AddComment = () => {
	const [ isFocus, setIsFocus ] = useState(false)

	const handleReset = () => {
		setIsFocus(false)
	}
	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		console.log('handle submit commit or review')
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
			<form onSubmit={handleSubmit} style={{ flex: 1 }}>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1
				}}>
					<TextField 
						variant='standard'
						fullWidth
						onFocus={() => setIsFocus(true)}
					/>
					{isFocus && (
						<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
							<Button variant='outlined' onClick={handleReset}>Reset</Button>
							<Button variant='contained' type='submit'>Comment</Button>
						</Box>
					)} 
				</Box>
			</form>
		</Box>
	)
}
