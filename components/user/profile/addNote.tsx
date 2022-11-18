import { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const AddNote = () => {
	const [ note, setNote ] = useState('')

	const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setNote(evt.target.value)
	}
	const handleReset = () => {
		setNote('')
	}

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		console.log({ note: note.trim() })
	}

	return (
		<form onSubmit={handleSubmit}>
			<Typography variant='h6' sx={{ textTransform: 'capitalize '}}>Add Note</Typography>

			<TextField 
				fullWidth
				multiline
				rows={4}

				value={note}
				onChange={changeHandler}
			/>
			<Box sx={{ 
				display: 'flex',
				justifyContent: 'flex-end',
				gap: 1,
				my: 2 
			}}>
				<Button variant='outlined' onClick={handleReset} >Reset</Button>
				<Button variant='contained' type='submit'>Add</Button>
			</Box>
		</form>
	)
}
export default AddNote