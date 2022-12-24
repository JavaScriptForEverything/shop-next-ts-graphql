import type { SxProps } from '@mui/material'
import { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const options = [
	'item1',
	'item2'
]

type Props = {
	sx?: SxProps
}
export const FilterBy = ({ sx={} }: Props) => {
	const [ filterValue, setFilterValue ] = useState<string>(options[0])

	console.log({ filterValue })

	const handleChange = (_: any, newValue: string|null) => {
		if(typeof newValue === 'string' ) setFilterValue(newValue)
	}

	return (
		<Box sx={sx}>
			<Autocomplete 
				renderInput={(params) => (
					<TextField {...params}
						label='Filter By'
						placeholder='price'
						InputLabelProps={{ shrink: true }}
						value={filterValue}
						size='small'
						fullWidth
						// sx={{ width: 200 }}
					/>
				)}
				options={options}
				getOptionLabel={item => item}
				onChange={handleChange}
				// inputValue={filterValue}

			/>	
		</Box>
	)
}
