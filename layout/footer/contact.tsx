import Link from 'next/link'

import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

const Contact = () => {

	return (
		<>
			<Typography fontSize='small' paragraph>
				Anyone can contact up with given email or any <em>social media</em> links
			</Typography>

			<Typography fontSize='small'>
				<Link href='mailto:javascriptforeverything@gmail.com' passHref>
					<MuiLink underline='none'>Email: JavaScriptForEverything@gmail.com</MuiLink>
				</Link>
			</Typography>
		</>
	)
}
export default Contact