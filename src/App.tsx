import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './shared/components/routing.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './shared/components/navbar.component';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routing />
      </Container>
    </Router>
  );
}

export default App;
