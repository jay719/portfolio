
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
          
            <Route exact path="/" component={Home} />  
            <Route exact path="/projects" component={Projects} />
          
      </BrowserRouter>
    </div>
  );
}

export default App;

