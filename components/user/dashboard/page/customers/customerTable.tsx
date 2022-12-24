// try use customer/table.js which is more usable instead of this table,
import { useState } from 'react'
// import * as util from '@util/index'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'




const header = ['Customer Name', '#ID', 'Spent', 'Last Order', 'Email', 'Phone', 'Status', 'Actions']

type Customer = {
	name: string,
	id: string,
	amount: number,
	lastOrder: string,
	email: string,
	phone: string,
	status: 'panding' | 'success'
}

type Props = {
	title?: string,
	customers: Customer[]
}
export const CustomerTable = ({ title='All Customers', customers=[] }: Props) => {
	const [ open, setOpen ] = useState(false)
	const [ anchorEl, setAnchorEl ] = useState(null)
	// const [ orderId, setOrderId ] = useState(0)


	const menuCloseHandler = () => {
		setOpen(false)
		setAnchorEl(null)
	}
	// const actionHandler = (evt, order) => {
	// 	setOpen(true)
	// 	setAnchorEl(evt.target)

	// 	setOrderId(order._id) 			// set order to so that item handler can access it
	// }
	const menuItemHandler = () => {
		menuCloseHandler()

		// console.log(orderId)
	}


	return(
		<Box>
			<Typography color='primary' variant='h6' paragraph>{title}</Typography>

			<TableContainer component={Paper}>
				<Table
					size='small'
				>
					<TableHead>
						<TableRow sx={{
							backgroundColor: (theme) =>	theme.palette.primary.main, 
							'& > th': {
								whiteSpace: 'nowrap'
							}
						}}>
							{header.map((item, key) => <TableCell key={key}
								sx={{color: '#ffffff', fontWeight: 600 }}
							>{item}</TableCell>)}
						</TableRow>
					</TableHead>

					<TableBody>
						{/* {orders.map( (item, key) => (
						<TableRow key={key} >
							<TableCell>{util.idFormatter(item._id)}</TableCell>
							<TableCell>{util.dateFormatter(item.createdAt)}</TableCell>
							<TableCell>{item.shipping.username}</TableCell>
							<TableCell>{item.shipping.email}</TableCell>
							<TableCell>{util.priceFormatter(item.payment.amount)}</TableCell>
							<TableCell>
								<Button
									variant='outlined'
									size='small'
									color='success'
									// color={item.isPaid ? 'warning' : 'error' }
									sx={{ textTransform: 'capitalize' }}
								>
									{item.isPaid ? 'Delivered' : 'Pending' }
								</Button>
							</TableCell>

							<TableCell>
								<IconButton onClick={(evt) => actionHandler(evt, item)}><MoreVertIcon /></IconButton>
							</TableCell>
						</TableRow>
						))} */}


						<Menu open={open} anchorEl={anchorEl} onClose={menuCloseHandler} >
							<MenuItem
								onClick={menuItemHandler}
								dense
								divider
							>
								<ListItemIcon> <DeleteIcon /> </ListItemIcon>
								<ListItemText>Delete</ListItemText>
							</MenuItem>
						</Menu>


					</TableBody>
				</Table>


			</TableContainer>
		</Box>
	)
}
