import React, {useState} from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const router = createBrowserRouter([
      {
        path: "/",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={progress}/>
                  <News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category ="general" />
                 </div>
      },
      {
        path: "/business",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={progress}/>
                  <News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category ="business" />
                 </div>
      },
      {
        path: "/entertainment",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={progress}/>
                  <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category ="entertainment" />
                 </div>
      },
      {
        path: "/health",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={progress}/>
                  <News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category ="health" />
                 </div>
      },
      {
        path: "/sports",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={progress}/>
                  <News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category ="sports" />
                 </div>
      },
      {
        path: "/technology",
        element: <div>
                  <Navbar />
                  <LoadingBar color='#f11946' progress={progress}/>
                  <News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category ="technology" />
                 </div>
      }
    ])
  
    return (
      <>
       <RouterProvider router={router} />
      </>
    );
  }

export default App
