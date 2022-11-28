import { connect, connection } from 'mongoose'

// const DB_URI =  process.env.MONGODB_URI
// const DB_URI =  process.env.MONGODB_URI_REMOTE

const { NODE_ENV, MONGODB_URI, MONGODB_URI_REMOTE } = process.env || {}
const DB_URI = NODE_ENV === 'production' ? MONGODB_URI_REMOTE : MONGODB_URI


if(!DB_URI) {
	throw new Error('Please add your MONGODB_URI to .env')
}


// Note: Always connect in API page, not Normal Page, else it throw Error of missing `MONGODB_URI`
export const dbConnect = () => {
	if(connection.readyState >= 1) return

	return connect(DB_URI)
		.then(conn => {
			const { host, port, name } = conn.connection
			console.log(`-----[ database connected on: ${host}:${port}/${name} ]-----`)
		})
		.catch(err => console.log(`database Connection failed. ${err.message}`))
}
