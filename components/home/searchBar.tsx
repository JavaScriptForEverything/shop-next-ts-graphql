import { useState } from 'react'

import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

import SearchIcon from '@mui/icons-material/Search'

export const SearchBar = () => {
	const [ search, setSearch ] = useState('')


	const searchHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(evt.target.value)
	}

	const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		console.log({ search })
		setSearch('')
	}

	return (
		<form onSubmit={submitHandler}>
			<TextField 
				label='Search'
				placeholder='blue shirt'
				fullWidth
				InputProps={{
					endAdornment: <> 
						<IconButton color='primary' type='submit' >
							<SearchIcon />	
						</IconButton>
					</>
				}}


				type='search'
				value={search}
				onChange={searchHandler}
			/>
		</form>
	)
}
