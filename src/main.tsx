import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './view/home/Home'
import Learn from './view/learn/Learn'
import Practice from './view/practice/Practice'
import About from './view/about/About'
import Contact from './view/Contact/Contact'
// import ErrorPage from './routes/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Not ideal to use errorElement
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'learn',
        element: <Learn />
      },
      {
        path: 'practice',
        element: <Practice />
      },
      {
        path: 'practice',
        element: <Practice />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
)
