import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER, GET_USERS } from '@/graphql/query/user'
import { UserDocument } from '@/shared/types/user'

type GetUsersQuery = {
	users: UserDocument[]
}
type GetUserQuery = {
	user: UserDocument
}

const UserHome = () => {
	// const { data }  = useQuery<GetUsersQuery>(GET_USERS)
	const [ userId, setUserId ] = useState('1')
	const { data }  = useQuery<GetUserQuery, {userId: string}>(GET_USER, { 
		variables: { userId }
	})

	return (
		<>
			<h2>User Home Page</h2>
			{/* <button onClick={() => setUserId(`${+userId + 1}`)}>userId: {userId}</button> */}
			<button onClick={() => setUserId('636502bc8ee8f0ad5da2b823')}>userId: {userId}</button>
			<pre>
				{JSON.stringify(data?.user, null, 2)}
				{/* {JSON.stringify(data?.users, null, 2)} */}
			</pre>
		</>
	)
}
export default UserHome
