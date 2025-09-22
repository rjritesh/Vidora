import { Provider } from "react-redux"
import Body from "./components/Body"
import store from "./utils/AppStore"


const App = () => {
  return (
    <div>
      <Provider store={store}>
         <Body></Body> 
         </Provider>

    </div>
  )
}

export default App