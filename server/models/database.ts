import { connect, connection } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string



export const dbConnect = () => {
	if(connection.readyState >= 1) return

	return connect(MONGODB_URI)
		.then(conn => {
			const { host, port, name } = conn.connection
			console.log(`-----[ database connected on: ${host}:${port}/${name} ]-----`)
		})
		.catch(err => console.log(`database Connection failed. ${err.message}`))
}
