import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Style from './components/Style/Style.jsx'
import Product from './components/Product/Product.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Log/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Quiz from './components/Quiz/Quiz.jsx'
import Quiz2 from './components/Quiz/Quiz2.jsx'
import Quiz3 from './components/Quiz/Quiz3.jsx'
import Forgotpass from './components/Forgot/Forgotpass.jsx'
import Resetpass from './components/Forgot/Resetpass.jsx'
const router = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "style", element:<Style/>
  },
  {
    path: "product", element:<Product/>
  },
  {
    path: "contact", element:<Contact/>
  },
  {
    path: "login", element:<Login/>
  },
  {
    path: "forgot", element:<Forgotpass/>
  },
  {
    path: "resetpass", element:<Resetpass/>
  },
  {
    path: "signup", element:<Signup/>
  },
  {
    path: "quiz", element:<Quiz/>
  },
  {
    path: "quiz2", element:<Quiz2/>
  },
  {
    path: "quiz3", element:<Quiz3/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
