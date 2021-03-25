
import './App.css';
import  HomeComponent from './components/HomeComponent.js'
import ProjectsComponent from './components/ProjectsComponent.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <main>
          <nav>
            <div className="App-header">
              <div>
                <p>Javaria Brascom</p>
              </div>
              <div className="Pages"> 
                <a className="link" href="/">Home</a>
                <a className="link" href="/projects">Projects</a>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact component={HomeComponent} />  
            <Route path="/projects" component={ProjectsComponent} />
          </Switch>
        </main>
      </Router>
      
      <div>
          <p>Hello</p>
          <h1>two</h1>
      </div>
    </div>
  );
}

export default App;

