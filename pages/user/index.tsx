import { UserDocument } from '@/server/controller/userController'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '@/graphql/query/user'

type GetUsersQuery = {
	users: UserDocument[]
}

const UserHome = () => {
	const { data }  = useQuery<GetUsersQuery>(GET_USERS)

	return (
		<>
			<h2>User Home Page</h2>
			<pre>
				{JSON.stringify(data?.users, null, 2)}
			</pre>
		</>
	)
}
export default UserHome
