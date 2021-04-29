// import logo from './logo.svg';
import './App.css';
import Home from "./containers/Home/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
