import {createBrowserRouter , RouterProvider} from "react-router-dom";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path :"/",
      element:<HomePage/> 
    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])

  return (
   <div className="App">
        <RouterProvider router={router}/>
   </div>
  )
}

export default App
