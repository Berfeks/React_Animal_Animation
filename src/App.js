
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Services from "./pages/Services"
import About from "./pages/About"

function App() {
  return (
   <Router>
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/services" component={Services} />
     <Route path="/about" component={About} />
   </Switch>
   </Router>
  )
}

export default App;
