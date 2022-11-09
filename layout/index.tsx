import Footer from './footer'
import Header from './header'

type Props = {
	children: React.ReactElement
}

const Layout = ({ children }: Props) => {

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
export default Layout
