import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

import { typeDefs } from '@/graphql/typeDefs'
import { resolvers } from '@/graphql/resolvers'


const cors = Cors()

const server = new ApolloServer({
	typeDefs,
	resolvers
})
const startServer = server.start()

const handler = cors(async(req, res) => {
	if(req.method === 'OPTIONS') return res.end()

	await startServer
	await server.createHandler({ path: '/api/graphql' })(req, res)
})

export default handler

export const config = { api: { bodyParser: false }}