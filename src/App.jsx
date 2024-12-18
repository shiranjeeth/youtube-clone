import { Provider } from "react-redux"
import Body from "./components/body"
import Header from "./components/Header"
import appStore from "../src/utils/store/appStore.jsx"

function App() {
  

  return (
    <>
    <Provider store={appStore}>
    <Header/>
    <Body/>
    </Provider>
    </>
  )
}

export default App
