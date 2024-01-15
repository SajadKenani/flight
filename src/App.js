import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './content/Content.js';
import { Upper } from './upper/Upper.js';

function App() {
  return (
    <div className="App">
      <Upper />
      <Content />

    </div>
  );
}

export default App;
