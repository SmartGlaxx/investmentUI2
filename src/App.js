import logo from './logo.svg';
import './App.css';
// import Header from './components/header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LandingPage, Signup, Login, ComfirmEmail, ForgotPassword, ErrorPage, CreateInvestment, Investments,
  CreateUser, UserProfile, Invest, VerifyPhone } from './pages';
import DashboardHome from './pages/Dashboards/dashboardHome';
import Overlay from './pages/UtilPages/overlay';
// import {Sidebar, SidebarMobile} from './components/';
// import {InvestorSidebar, InvestorSidebarMobile} from './components';
//import AuthWrapper from './pages/UtilPages/authWrapper'
import { UseContext } from './contexts.js/context';


function App() {
  const {authenticated} = UseContext()
  return (
    <BrowserRouter>
    <Overlay />
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path='/comfirmemail' exact>
          <ComfirmEmail />
        </Route>
        <Route path='/forgotPassword' exact>
          <ForgotPassword />
        </Route>
        <Route path='/dashboard' exact>
          <DashboardHome />
        </Route>
        <Route path='/createinvestment/:userId/:username' exact>
          <CreateInvestment />
        </Route>
        <Route path='/invest/:userId/:username' exact>
          <Invest />
        </Route>
        <Route path='/investment/:userId/:username/investments' exact>
          <Investments />
        </Route>
        <Route path='/createuser' exact>
          <CreateUser />
        </Route>
        <Route path='/users/:userId/:username' exact>
          <UserProfile />
        </Route>
        <Route path='/verifyPhone' exact>
          <VerifyPhone />
        </Route>
        

        <Route path='*' exact>
          <ErrorPage />
        </Route>
    </Switch>
    </BrowserRouter>
  );

}
export default App;
