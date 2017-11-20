import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';
// 1
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// 2
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cja86fefj2u2401443r75y0vu' });

// 3
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

// 4
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);
registerServiceWorker();
