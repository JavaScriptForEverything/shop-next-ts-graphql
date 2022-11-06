import { Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

const options = [
	'item1',
	'item2'
]

export const FilterBy = () => {
	const [ filterValue, setFilterValue ] = useState<string>(options[0])

	console.log({ filterValue })

	const handleChange = (_: any, newValue: string|null) => {
		if(typeof newValue === 'string' ) setFilterValue(newValue)
	}

	return (
		<>
			<Autocomplete 
				renderInput={(params) => (
					<TextField {...params}
						label='Filter By'
						placeholder='price'
						InputLabelProps={{ shrink: true }}
						value={filterValue}
						size='small'
						sx={{ width: 200 }}
					/>
				)}
				options={options}
				getOptionLabel={item => item}
				onChange={handleChange}
				// inputValue={filterValue}

			/>	
		</>
	)
}
