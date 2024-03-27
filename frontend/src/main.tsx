import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import SecurityContextProvider from './context/securityContext.tsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './utils/theme.ts'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SecurityContextProvider>
          <App />
        </SecurityContextProvider>
      </ThemeProvider>

    </ApolloProvider>
)
