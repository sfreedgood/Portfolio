import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { About } from './components/About.tsx'
import { Resume } from './components/Resume.tsx'

const AppRouterConfig = [
  {
    path: '/',
    element: <App />,
    navText: 'Home',
  },
  {
    path: '/about',
    element: <About />,
    navText: 'About',
  },
  {
    path: '/resume',
    element: <Resume />,
    navText: 'Resume',
  },
]

const router = createBrowserRouter(AppRouterConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
