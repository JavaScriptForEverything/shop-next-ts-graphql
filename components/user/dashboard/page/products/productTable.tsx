import Link from 'next/link'
import { useState } from 'react'
import { shorter } from '@/util/index'
import { useAppSelector } from '@/store/hooks'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Pagination from '@mui/material/Pagination'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'


const tableLimitOptions = [...Array(10)].map((item, index) => index + 1)


export const ProductTable = () => {
	const { products } = useAppSelector(state => state.product)
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState<null|HTMLButtonElement>(null)
	const [ selectedProductId, setSelectedProductId ] = useState('')
	const [ limit, setLimit ] = useState(5)
	const [ countPage, setCountPage ] = useState(5)
	const [ page, setPage ] = useState(1)


	const closeHandler = () => {
		setOpen(false)
	}
	const actionHandler = (productId: string) => (evt: React.MouseEvent<HTMLButtonElement>) => {
		setSelectedProductId(productId)
		setAnchorEl(evt.currentTarget)
		setOpen(true)
	}

	const menuItemHandler = () => {
		closeHandler()
		console.log({ productId: selectedProductId })
	}

	const limitHandler = (_: any, value: number|null ) => {
		console.log(value)
	}
	const pageHandler = (_: any, newPage: number ) => {
		setPage(newPage)
	}


	return (
		<>



			<Typography color='primary' paragraph variant='h6'>All Products</Typography>			

			<TableContainer component={Paper}
					sx={{
						maxWidth: { xs: 600, sm: '100%' }
					}}
			>
				<Table size='small' 
				>
					<TableHead>
						<TableRow sx={(theme) => ({
								backgroundColor: theme.palette.primary.main,
							'& th': {
								fontWeight: theme.typography.subtitle2,
								color: theme.palette.common.white,
								textTransform: 'capitalize',
								whiteSpace: 'nowrap',
							}
						})}>
							<TableCell>product name</TableCell>
							<TableCell>category</TableCell>
							<TableCell>price</TableCell>
							<TableCell>stock</TableCell>
							<TableCell>sold</TableCell>
							<TableCell>revenue</TableCell>
							<TableCell>action</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{products.map(product => (
						<TableRow key={product.id} sx={{
							'& td' : { whiteSpace: 'nowrap' }
						}}>
							<TableCell>
								<Link href={`/product/${product.slug}`} passHref>
									<MuiLink sx={{ textTransform: 'capitalize' }}>
										{shorter(product.name, 15)}
									</MuiLink>
								</Link>
							</TableCell>
							<TableCell>shirt</TableCell>
							<TableCell>${product.price}.00</TableCell>
							<TableCell>20</TableCell>
							<TableCell>10</TableCell>
							<TableCell>$100.00</TableCell>
							<TableCell>
								<IconButton onClick={actionHandler(product.id)}>
									<MoreVertIcon />
								</IconButton>
							</TableCell>
						</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Menu 
				open={open}
				anchorEl={anchorEl}
				onClose={closeHandler}
			>
				<MenuItem dense divider onClick={menuItemHandler}>
					<ListItemIcon><DeleteIcon /></ListItemIcon>
					<ListItemText primary='Delete' />
				</MenuItem>
			</Menu>

			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 2,
				// px: 1,
				py: 2
			}}>
				<Autocomplete
					options={tableLimitOptions}
					getOptionLabel={option => `${option}`}
					renderInput={params => <TextField {...params} />}

					size='small'
					value={limit}
					onChange={limitHandler}
				/>

				{countPage && countPage != 1 && <Pagination
					shape='rounded'
					color='primary'
					boundaryCount={0}
					siblingCount={1}
					hidePrevButton
					hideNextButton

					count={countPage}
					page={page}
					onChange={pageHandler}
				/>}
			</Box>

		</>
	)
}
