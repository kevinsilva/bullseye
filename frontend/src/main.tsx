import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import SecurityContextProvider from './context/securityContext.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <SecurityContextProvider>
      <App />
    </SecurityContextProvider>
  </ApolloProvider>
)
