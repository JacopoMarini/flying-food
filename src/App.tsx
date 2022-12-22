import { Global, ThemeProvider } from '@emotion/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'
import { globalStyle } from './style/global'
import { theme } from './style/theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: 'products/:id',
    element: <ProductDetail />
  },
  {
    path: 'cart',
    element: <Cart />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
