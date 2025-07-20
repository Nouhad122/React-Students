import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootPage from './RootPage'
import Login from './Pages/Login'
import Students from './Pages/Students';
import ProtectedRoute from './Components/RouteProtection/ProtectedRoute';
import Unauthorized from './Pages/Unauthorized';
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/students",
          element: <ProtectedRoute><Students /></ProtectedRoute>
        },
        {
          path: "/unauthorized",
          element: <Unauthorized />
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
