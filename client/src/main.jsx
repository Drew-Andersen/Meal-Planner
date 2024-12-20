// Import React Router
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import pages the router will use to conditionally show the appropriate views
import App from './App.jsx';
import Login from './pages/login/Login.jsx';
import Home from './pages/home/Home.jsx';
import Signup from './pages/signup/Signup.jsx';
import Error from './pages/Error.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import FoodLog from './pages/food-log/Food-Log.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import AddFood from './pages/food-log/addFood/AddFood.jsx';
import Search from './pages/food-log/addFood/search.jsx';
import CreateFood from './pages/food-log/createFood/CreateFood.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: '/food_log',
        element: (
          <ProtectedRoute>
            <FoodLog />
          </ProtectedRoute>
        )
      },
      {
        path: '/addFood',
        element: (
          <ProtectedRoute>
            <AddFood />
          </ProtectedRoute>
        )
      },
      {
        path: '/search',
        element: (
          <ProtectedRoute>
            <Search />
          </ProtectedRoute>
        )
      },
      {
        path: '/createFood',
        element: (
          <ProtectedRoute>
            <CreateFood />
          </ProtectedRoute>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
