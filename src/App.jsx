import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import NetflixMain from './pages/NetflixMain';
import SignUp from './pages/SignUp';
import { Player } from './pages/Player';
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route exact path='/login' element={<Login />}></Route>
  <Route exact path='/' element={<NetflixMain />}></Route>
  <Route exact path='/signup' element={<SignUp />}></Route>
  <Route exact path='/player' element={<Player />}></Route>

</Routes>
</BrowserRouter>
    )
}

export default App;
