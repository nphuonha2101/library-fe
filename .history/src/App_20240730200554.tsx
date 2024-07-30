import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, layout, component }, index) => (
            <Route
              key={index}
              path={path}
              element={(
                <route.layout>
                  <route.component />
                </route.layout>
              )
              }
            />
          ))}
        </Routes>
      </>
      )
}

      export default App
