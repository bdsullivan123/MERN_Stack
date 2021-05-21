import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update';
import New from './views/New';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Update path="/edit/:id" />
        <New path="/new" />
      </Router>
    </div>
  );
}

export default App;
