import { Provider } from "react-redux"
import Body from "./components/body"
import Header from "./components/Header"
import appStore from "../src/utils/store/appStore.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainerComponent/MainContainer.jsx"
import WatchPage from "./components/WatchPageComponents/WatchPage.jsx"



const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
    {
      path : "/",
      element : <MainContainer/>
    },
    {
      path : "/watch",
      element : <WatchPage/>
    },
  ]
}])  // the children will go inside outlet
// outlet is declared inside body componenet
function App() {
  

  return (
    <>
    <Provider store={appStore}>
    <Header/>
    <RouterProvider router={appRouter}/>
    </Provider>
    </>
  )
}

export default App
