import Footer from './footer'
import Header from './header'

import Box from '@mui/material/Box'

type Props = {
	children: React.ReactElement
}

const Layout = ({ children }: Props) => {

	return (
		<>
			<Header />
			<Box sx={{ my: 2 }}>
				{children}
			</Box>
			<Footer />
		</>
	)
}
export default Layout
