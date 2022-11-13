import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { wrapper } from '../store'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

import Layout from 'layout'


const client = new ApolloClient({
	uri: '/api/graphql',
	cache: new InMemoryCache()
})

function MyApp({ Component, ...rest }: AppProps) {
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
