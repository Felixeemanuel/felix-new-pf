import { useState } from 'react'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import { AnimatePresence } from 'framer-motion'
import PortfolioPage1 from './Pages/PortfolioPage1'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'portfolio',
          element: <PortfolioPage1 />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}>
      <AnimatePresence>
        <RootLayout />
      </AnimatePresence>
    </RouterProvider>
  )
}

export default App
