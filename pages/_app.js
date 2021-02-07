import "../styles/global.css"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"

const client = new ApolloClient({
	uri: "/api/graphql",
	cache: new InMemoryCache()
})

const App = ({Component, pageProps}) => {
	return (
	<ApolloProvider client={client}>
		<Component {...pageProps} />
	</ApolloProvider>
	)
}

export default App
