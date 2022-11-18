import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { wrapper } from '../store'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

import Layout from 'layout'

const ROOT_URL = process.env.ROOT_URL || ''

export const client = new ApolloClient({
	// uri: '/api/graphql',
	uri: `${ROOT_URL}/api/graphql`,
	cache: new InMemoryCache()
})

const MyApp = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	const { pageProps } = props

  return (
		<ReduxProvider store={store}>
			<SessionProvider>

			<ApolloProvider client={client}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>

			</SessionProvider>
		</ReduxProvider>
	)
}

export default MyApp
