import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Overview from './pages/Overview';
import { Mammal,Canidae, Dog, Fox, Wolf, Lizard, Snake, Gekko, Squamata,Reptile } from './pages/Reports';
import Team from './pages/Team';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
          <Route path='/' exact component={Team} />
        <Route path='/mammal' exact component={Mammal} />
        <Route path='/mammal/canidae' exact component={Canidae} />
        <Route path='/mammal/canidae/dog' exact component={Dog} />
        <Route path='/mammal/canidae/fox' exact component={Fox} />
        <Route path='/mammal/canidae/wolf' exact component={Wolf} />
        <Route path='/reptile' exact component={Reptile} />
        <Route path='/reptile/squamata' exact component={Squamata} />
        <Route path='/reptile/squamata/lizard' exact component={Lizard} />
        <Route path='/reptile/squamata/snake' exact component={Snake} />
        <Route path='/reptile/squamata/gekko' exact component={Gekko} />
      </Switch>
    </Router>
  );
}

export default App;
