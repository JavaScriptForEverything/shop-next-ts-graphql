import Link from 'next/link'
import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

const HashTag = () => {

	return (
		<Box sx={{ display: 'flex', gap: 4 }}>
			<Link href='/' passHref>
				<MuiLink>
					<Image 
						src='/images/logo.svg' 
						width={120} height={120} 
						alt='image logo'
					/>
				</MuiLink>
			</Link>

			<Typography align='justify' fontSize='small'>
				HashTag is a fasion ware house, here we sell shirt pant and men ladis and babies
				and all type of ware collection.
			</Typography>
			
		</Box>
	)
}
export default HashTag