import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <Container customClass="min-height"> 
        <Switch>
            <Route exact path="/" element ={<Home/>} />
            <Route exact path="/projetos" element ={<Projects/>} />
            <Route path="/sobre" element ={<Sobre/>} />
            <Route path="/contato" element ={<Contato/>} />
            <Route path="/novoprojeto" element ={<NovoProjeto/>} />
        </Switch>
      </Container>
      <Footer />


    </Router>
  );
}

export default App;
