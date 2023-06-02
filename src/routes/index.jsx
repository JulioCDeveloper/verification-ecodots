
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'

const RoutesPage = () => {
  return (
    <Routes>
        <Route path='' index element={<Home />} />
    </Routes>
  )
}

export default RoutesPage