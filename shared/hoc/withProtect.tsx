import { useRouter } from 'next/router'

const withProtect = <T extends {}>(Component: React.ComponentType) => {

	const WithProtect = (hocProps: T) => {
		const router = useRouter()

		return (
			<>
				<Component {...hocProps} />
			</>
		)
	}
	return WithProtect
}
export default withProtect
