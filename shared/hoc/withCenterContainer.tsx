import Container from '@mui/material/Container'


const withCenterContainer = <T extends {}>(Component: React.ComponentType<T>) => {

	const WithCenterContainer = (hocProps: T) => {
		return (
			<Container maxWidth='xs' sx={{ my: 2 }}>
				<Component {...hocProps} name={'riajul'}  />
			</Container>
		)
	}

	return WithCenterContainer
}
export default withCenterContainer
