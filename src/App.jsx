import React from 'react'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'

import Layouts from './Layouts'
import Home from './pages/navbar/Home'
import NotFound from './pages/navbar/NotFound'
import CreateCourse from './components/courses/CreateCourse'
import AllCourses from './components/courses/AllCourses'
import CourseDetails from './components/courses/CourseDetails'
import EditCourse from './components/courses/EditCourse'
import AllUsers from './users/AllUsers'
import SingleUser from './users/Singleuser'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts/>,
        children:[
            {
                path: '/',
                // index: true,
                element: <Home/>,
                children:[
                    {
                        index: true,
                        element: <AllCourses />
                    },
                    {
                        path: 'create-course',
                        element: <CreateCourse />
                    },
                    {
                        path: ':id',
                        element: <CourseDetails />
                    },
                    {
                        path: '/edit/:id',
                        element: <EditCourse />
                    },
                    {
                        path: 'users'
                        ,element: <AllUsers />
                    },
                    {
                        path: '/users/:id'
                        ,element: <SingleUser    />
                    },
                ]
            },
            {

                path: "*",
                element: <NotFound />
            },
        ],
    },
])
const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App