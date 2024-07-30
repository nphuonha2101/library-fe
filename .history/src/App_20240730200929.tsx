import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={(
                <route.Layout>
                  <route.Component />
                </route.Layout>
              )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
