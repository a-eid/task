import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { windowInfo } from "./helpers/context"


export const WContext = React.createContext()

// const AuthContext = React.createContext({

// })

ReactDOM.render(
  <WContext.Provider value={windowInfo}>
    <App />
  </WContext.Provider>,
  document.getElementById("root")
)
registerServiceWorker()
