import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/register/Register";
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user}=useContext(Context);
  return (
      <div className="App">
        <BrowserRouter>
            <TopBar/>
            <Switch> 
                <Route exact path="/">
                  <Home /> 
                </Route>
                <Route exact path="/about">
                  <About/>
                </Route>
                <Route exact path="/contact">
                  <Contact/>
                </Route>
                <Route exact path="/register">
                  {user ? <Home/> : <Register/>}
                </Route>
                <Route exact path="/login">
                  {user ? <Home/> : <Login/>}
                </Route> 
                <Route exact path="/write">
                  {user ? <Write /> : <Login/>}
                </Route> 
                <Route exact path="/settings">
                  {user ? <Settings /> : <Login/>}
                </Route> 
                <Route exact path="/post/:id">
                  <Single/>
                </Route> 
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
