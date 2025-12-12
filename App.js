import React,{lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from './src/components/Contact';
import About from './src/components/About';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';

import { createBrowserRouter,RouterProvider,Outlet } from 'react-router';
import UserContext from './src/utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Cart from './src/components/Cart';

const Grocery =lazy(()=>import('./src/components/Grocery'))

const App =()=>{

        const [name,setName]=useState();

        useEffect(()=>{

            const data={
                person:"suhas",
            };

            setName(data.person);
        },[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:name,setName}}>
                <div className='app-container'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}


const approuter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children :[     
         {
            path:"/",
            element: <Body />
         },
         {
            path:"/about",
            element: <About />
         },
        {
            path:"/contact",
            element: <Contact />
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>loading.......</h1>}>
                <Grocery />
                </Suspense> 
         },
        {
           path:"/restaurant/:resid",
           element: <RestaurantMenu />
        },
         {
            path:"/cart",
            element:<Cart />
         },
        ],
        errorElement:<Error />
    },
    
])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />)  // this created h1 tag and render that to page