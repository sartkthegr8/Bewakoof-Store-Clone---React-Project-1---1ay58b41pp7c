import "../styles/App.css";
import About from "./About";
import Body from "./Body";
import Header from "./Header";
import Navbar from "./Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";





function App() {
  return (
    <>
     <div className="App">
       <Navbar/>
        <Header/>
        <Body/>   
    </div>
    </>
  )   
}

const appRouter = createBrowserRouter([
  {
    path:  "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>
  }

])



export default appRouter;
