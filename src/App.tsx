import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import store, { persistor } from "./redux/store"

import './App.css'
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from "redux-persist/integration/react"
import PrivateRoute from "./middlewares/PrivateRoute.tsx"

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={(
                    <PrivateRoute routeType={route.routeType}>
                      <route.Layout>
                        <ToastContainer />
                        <route.Component />
                      </route.Layout>
                    </PrivateRoute>
                  )
                  }
                />
              ))}
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider >
    </>
  )
}

export default App
