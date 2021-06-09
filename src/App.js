
import './App.css';
import Header from './components/Header.js'
import  Home from './components/Home.js'
import Projects from './components/Projects.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" component={Home} />  
            <Route path="/projects" exact  component={Projects} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

