import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './content/Content.js';
import { Upper } from './upper/Upper.js';
import { Footer } from './footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Upper />
      <Content />
      <Footer />

    </div>
  );
}

export default App;
