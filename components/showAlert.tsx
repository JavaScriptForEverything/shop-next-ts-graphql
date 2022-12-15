import { useAppDispatch, useAppSelector } from '@/store/hooks'
import * as layoutReducer from '@/store/layoutReducer'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const ShowAlert = () => {
	const dispatch = useAppDispatch()
	const { open, message, severity, duration } = useAppSelector(state => state.layout.alert)

	const closeHandler = () => {
		dispatch(layoutReducer.showAlert({ open: false, message: '' }))
	}

	return (
		<>
			<Snackbar
				open={open}
				onClose={closeHandler}
				onClick={closeHandler}
				anchorOrigin={{
					horizontal: 'center',
					vertical: 'top'
				}}
				autoHideDuration={duration}
			>
				<Alert
					severity={severity}
				>{message}</Alert>
			</Snackbar>
		</>
	)
}
export default ShowAlert
