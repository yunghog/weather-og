import { HashRouter, Route, Switch} from "react-router-dom";

import Home from './pages/home';
import Error from './pages/error';
import ApiTesting from './pages/apiTesting';
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/"  component={Home}/>
        <Route path="/test"  component={ApiTesting}/>
        <Route path="/error"  component={Error}/>
    </HashRouter>
  );
}

export default App;
