import { useState } from 'react'
import slugify from 'slugify'

import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'

import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'


/*
	//	const handleSubmit = (label: string, value: string) => {
			const handleSubmit = (label: FilterLabel, value: string) => {
				console.log({ label, value })
			}
			<SearchInput submitHandler={handleSubmit} />
*/




export type FilterLabel = 'name' | 'slug'
const filterLables: FilterLabel[] = ['name', 'slug']

type Props = {
	submitHandler: (label: FilterLabel, value: string) => void
}
const SearchInput = ({ submitHandler }: Props) => {
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<null | HTMLButtonElement>(null)
	const [ searchFilterLabel, setSearchFilterLabel ] = useState<FilterLabel>(filterLables[0])
	const [ searchValue, setSearchValue ] = useState('')

	const closeMenuHandler = () => {
		setOpen(false)
		setAnchorEl(null)
	}
	const openMenuHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget)
		setOpen(true)
	}
	const menuItemClickHandler = (filterLabel: FilterLabel) => () => {
		closeMenuHandler()
		setSearchFilterLabel(filterLabel)
	}
	const handleSearchValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(evt.target.value)
	}
	const searchHandler = () => {
		// handle slug
		if(searchFilterLabel === 'slug') {
			const slugifySearchValue = slugify(searchValue, { lower: true })
			submitHandler(searchFilterLabel, slugifySearchValue)

			return // must return: don't go any more bellow
		}

		// handle others
		submitHandler(searchFilterLabel, searchValue)
	}

	return (
		<>
		<Box sx={ theme => ({
			display: 'flex',
			borderRadius: 1,
			border: `1px solid ${theme.palette.primary.main}`, 
			'&:hover': {
				border: `1px solid ${theme.palette.primary.dark}`, 
			},
			height: { xs:  8*6, sm: 'auto' }
		})}>
			<Button 
				variant='outlined'
				endIcon={<KeyboardArrowDownIcon />}
				sx={ theme => ({
					textTransform: 'capitalize',
					borderRadius: 0,
					border: 0,
					borderRight: `1px solid ${theme.palette.grey[300]}`,
					'&: hover' : {
						border: 0,
						borderRight: `1px solid ${theme.palette.grey[400]}`,
					}
				})}
				onClick={openMenuHandler}
			>{searchFilterLabel}</Button>

			<InputBase 
				placeholder='What are you looking for ...'
				sx={{ flex: 1, ml: 1 }}
				value={searchValue}
				onChange={handleSearchValue}
			/>

			<Button 
				variant='contained'
				startIcon={<SearchIcon />}
				sx={{
					textTransform: 'capitalize',
					borderRadius: 0,
					border: 0,
					borderTopRightRadius: 2,
					borderBottomRightRadius: 2,
					'&: hover' : {
						border: 0,
					}
				}}
				onClick={searchHandler}
			>Search</Button>

		</Box>

		<Menu 
			open={open}
			anchorEl={anchorEl}
			onClose={closeMenuHandler}
		>
			{filterLables.map(label => (
				<MenuItem key={label} 
					divider
					onClick={menuItemClickHandler(label)}
				>
						{/* <ListItemText primary={`Filter By ${label}`} sx={{ textTransform: 'capitalize' }} /> */}
						<ListItemText sx={{ textTransform: 'capitalize' }} >
							<Typography component='span' variant='caption' color='textSecondary'>Filter By: </Typography>
							<Typography component='span'> {label} </Typography>
						</ListItemText>
				</MenuItem>
			))}
		</Menu>
		</>
	)
}
export default SearchInput
