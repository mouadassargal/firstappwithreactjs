import Users from "./components/users/Users"
import './App.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import UsersItems from "./components/users/UserItems"
function App() {
  return (
    <Router>
 <div className="App">
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:login" component={UsersItems} />
          <Route exact component={Users} />
        </Switch>
      <Users/>

      </div>
    </div>
    </Router>
   
  );
}

export default App;
