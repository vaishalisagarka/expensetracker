import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddExpensepage from "./pages/AddExpensepage";
import ExpenseDetails from "./components/ExpenseDetails";
import Layout from "./Layout/Layout";
import LoginPage from "./pages/LoginPage";

function App(){
  const route=createBrowserRouter([
    {path:"/",element:<Layout/>,children:[{path:'/',element:<Homepage/>},
    {path:'/add-expense',element:<AddExpensepage/>},
    {path:'/expenseDetails/:id',element:<ExpenseDetails/>},]},
    {path:"/login",element:<LoginPage />}
  ]);

  return(
    <>
    <RouterProvider router={route}/>
    
    </>
  );
}

export default App;