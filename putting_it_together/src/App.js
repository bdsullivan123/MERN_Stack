import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <PersonCard 
        firstName={ "Jane" }
        lastName={ "Doe" }
        age={ 45 }
        hairColor={ "Black" }
      />
      <PersonCard 
        firstName={ "John" }
        lastName={ "Smith" }
        age={ 88 }
        hairColor={ "Brown" }
      />
    </>
  );
}

export default App;
