
const Logout = () => {
	return (<></>)
}
export default Logout

export const getServerSideProps = () => {
	console.log('user Loged outed')

	if(true) return {
		redirect: {
			destination: '/about'
		}
	}

	return { props: {}}
}