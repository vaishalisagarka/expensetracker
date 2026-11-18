import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddExpensepage from "./pages/AddExpensepage";

function App(){
  const route=createBrowserRouter([
    {path:'/',element:<Homepage/>},{path:'/add-expense',element:<AddExpensepage/>}
  ])

  return(
    <>
    <RouterProvider router={route}/>
    
    </>
  );
}

export default App;