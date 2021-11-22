import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import UsMoments from './Components/Pages/Drawer/Drawer';
import Home from './Components/Pages/Home/Home/Home';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/drawer">
            <UsMoments></UsMoments>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
