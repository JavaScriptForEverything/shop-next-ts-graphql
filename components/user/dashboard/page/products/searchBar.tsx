import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

export const SearchBar = () => {
	const [ search, setSearch ] = useState('')

	const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(evt.target.value)
	}

	const handleSearch = () => {
		console.log(search)
	}


	return (
		<>
			<TextField 
				placeholder='Searcing for...'
				fullWidth
				InputProps={{
					endAdornment: <> 
						<IconButton color='primary' onClick={handleSearch} >
							<SearchIcon />	
						</IconButton>
					</>
				}}


				type='search'
				value={search}
				onChange={changeHandler}

			/>
			
		</>
	)
}
