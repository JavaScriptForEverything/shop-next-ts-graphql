import Footer from './footer'
import Header from './header'

import Container from '@mui/material/Container'

type Props = {
	children: React.ReactElement
}

const Layout = ({ children }: Props) => {

	return (
		<>
			<Header />
			<Container sx={{ my: 2 }}> {children} </Container>
			<Footer />
		</>
	)
}
export default Layout
