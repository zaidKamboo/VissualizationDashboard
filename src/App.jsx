import React, { useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import Navbar from './components/common/Navbar'
import { useSelector } from 'react-redux'
import { makeSelectDarkmode } from './store/selectors'

const App = () => {
  const darkmode = useSelector(makeSelectDarkmode);
  useEffect(() => {

    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  )
}

export default App