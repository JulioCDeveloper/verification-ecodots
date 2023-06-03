
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/home'

const RoutesPage = () => {
  // const { lotId, typeUser } = useParams();
  return (
    <Routes>
        <Route path='/verification/:lotId/:typeUser' index element={<Home />} />
    </Routes>
  )
}

export default RoutesPage