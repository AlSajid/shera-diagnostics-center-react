import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute.js/PrivateRoute";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Service from "./components/Services/Service/Service";
import Reports from "./components/Reports/Reports";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute exact path="/reports">
              <Reports></Reports>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <Route exact path="/services/:ID">
              <Service></Service>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
