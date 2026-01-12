import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import './App.css'
import App from './App.tsx'
import DashboardPage from './pages/DashboardPage.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/dashboard',
    element:<DashboardPage></DashboardPage>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
