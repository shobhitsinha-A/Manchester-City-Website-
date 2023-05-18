import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header_footer/header';
import Footer from './Components/Header_footer/footer';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/notFound';

//import AuthGuard from './Hoc/Auth';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';
import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/matches/index';
import AddEditMatch from './Components/Admin/matches/addEditMatch';

const Routez = ({user}) => {

  //console.log(props)
  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
      <Route path="/admin_matches/edit_match/:matchid" exact element={<AddEditMatch />} />
      <Route path="/admin_matches/add_match" exact element={<AddEditMatch />} />
      <Route path="/admin_matches" exact element={<AdminMatches />} />
      


      <Route path="/admin_players/add_player" exact element={<AddEditPlayers />} />
      <Route path="/admin_players/edit_player/:playerid" exact element={<AddEditPlayers />} />
      <Route path="/admin_players" exact element={<AdminPlayers/>} />
      <Route path="/the_matches" exact element={<TheMatches/>} />
      <Route path="/dashboard" exact element={<Dashboard/>} />
      <Route path="/the_team"  exact element={<TheTeam/>}/>
        <Route path="/sign_in" exact element={<SignIn/>} />
        <Route path="/" exact element={<Home />} />
        <Route component={NotFound}/>
      </Routes>
      <ToastContainer/>
      <Footer />
    </BrowserRouter>
  );
}

export default Routez;
