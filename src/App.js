import {BrowserRouter as Router, Route, Routes as Switch, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/sobre"> Sobre</Link>
        <Link to="/contato"> Contato</Link>
        <Link to="/novoprojeto"> Novo Projeto</Link>
      </div>

      <Container customClass="min-height"> 
        <Switch>
            <Route exact path="/" element ={<Home/>} />
            <Route path="/sobre" element ={<Sobre/>} />
            <Route path="/contato" element ={<Contato/>} />
            <Route path="/novoprojeto" element ={<NovoProjeto/>} />
        </Switch>
      </Container>
      <p> Footer </p>


    </Router>
  );
}

export default App;
