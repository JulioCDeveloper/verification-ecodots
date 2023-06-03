
import { Route, Routes} from 'react-router-dom'
import Home from '../pages/home'

const RoutesPage = () => {
  // const { lotId, typeUser } = useParams();
  return (
    <Routes>
        <Route path="/lot/:lotId/verify/:verificationCode" index element={<Home />} />
    </Routes>
  )
}

export default RoutesPage