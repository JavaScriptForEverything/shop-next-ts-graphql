import { gql, useQuery } from '@apollo/client'

const GET_ME = gql`
	query getUser($userId: ID!) {
		user(userId: $userId) {
			id
			name
			email
		}
	}
`
type UserDocument = {
	id: string
	name: string
	email: string
	createdAt: Date
}

type QueryProps = {
	user: UserDocument
}

const ErrorPage = () => {
	const { data, error } = useQuery<QueryProps>( GET_ME, { 
		variables: { userId: "1" },
		fetchPolicy: 'network-only'
	})

	// console.log(error?.message)
	data?.user.createdAt

	return (
		<>
			<h2>Error Testing</h2>
			<p>{error && error.message }</p>
			<pre>
				{JSON.stringify(data?.user, null, 2)}
			</pre>
		</>
	)
}
export default ErrorPage
