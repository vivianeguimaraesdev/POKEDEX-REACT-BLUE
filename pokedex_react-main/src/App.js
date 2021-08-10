import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './Components/Info/Info';
import CardList from './Components/CardList/CardList';
import './Styles/main.css';

export default function App() {

  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList} />
          <Route path="/sobre/:id" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}