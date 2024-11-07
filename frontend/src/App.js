import Home from './Components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import Details from './Components/Details';
import Overview from './Components/PlaceDetails/Overview';
import Hotels from './Components/PlaceDetails/Hotels';
import Teams from './Components/PlaceDetails/Teams';
import About from './Components/PlaceDetails/About';
import Review from './Components/Review/Review';
import AboutUs from './Components/AboutUs';
import ContactForm from './Components/ContactUs';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path: "/aboutus",
      element:<AboutUs/>
    },
    {
      path:"/contactus",
      element:<ContactForm/>
    },
    {
      path: "/register",
      element:<Register/>
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
        path:"/:id",
        element:<Details/>,
        children: [
          { path: '', element: <Overview /> },
          // { path: 'hotels', element: <Hotels /> },
          { path: 'teams', element: <Teams /> },
          { path: 'about', element: <About /> },
          // { path: '*', element: <ErrorPage /> } // Catch-all route for non-existent pages
        ]
    },{
      path:':id/review',element: <Review/>
    }
  ])

  
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
