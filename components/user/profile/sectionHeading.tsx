import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'

import EditIcon from '@mui/icons-material/Edit'


type HeadingProps = {
	title: string
	onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void
	icon?: JSX.Element
	children?: React.ReactElement | React.ReactNode
	isRotate?: boolean
}
export const Section = (props: HeadingProps) => {
	const { 
		title, 
		icon = <EditIcon color='action' />, 
		onClick, 
		children,
		isRotate=false 
	} = props

	return (
		<>
			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'baseline'
			}}>
				<Typography variant='h6' sx={{ textTransform: 'capitalize '}}>{title}</Typography>
				<IconButton 
				sx={ isRotate ? { transform: 'rotate(45deg)' } : {}}
				onClick={onClick}> {icon} </IconButton>
			</Box>
			<Divider />

			<Box sx={{ my: 1 }}>
				{children}
			</Box>
		</>
	)
}