// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import routes from './routes/index'
import AuthProvider from './context/AuthProvider'
import './assets/css/global.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  // </StrictMode>,
)
