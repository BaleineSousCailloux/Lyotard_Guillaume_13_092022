import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import { Provider } from 'react-redux'
import store from '../stores/userStore'
// import UnderConstruction from './pages/UnderConstruction'
// import Error404 from './pages/Error404'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App

/*
<Route path="/soon" element={<UnderConstruction />} />
<Route path="/not-found" element={<Error404 />} />
<Route path="*" element={<Navigate to="/not-found" />} />
*/
