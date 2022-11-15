import { connect, connection } from 'mongoose'

if(!process.env.MONGODB_URI) {
	throw new Error('Please add your MONGODB_URI to .env.local')
}
const MONGODB_URI: string = process.env.MONGODB_URI 


// Note: Always connect in API page, not Normal Page, else it throw Error of missing `MONGODB_URI`
export const dbConnect = () => {
	if(connection.readyState >= 1) return

	return connect(MONGODB_URI)
		.then(conn => {
			const { host, port, name } = conn.connection
			console.log(`-----[ database connected on: ${host}:${port}/${name} ]-----`)
		})
		.catch(err => console.log(`database Connection failed. ${err.message}`))
}
