import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Layout from 'layout'


const client = new ApolloClient({
	uri: '/api/graphql',
	cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}

export default MyApp
