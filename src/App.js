import react, { useState } from 'react'
import ColorForm from './components/ColorForm'
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('');
  
  const heresTheColor = ( newColor) => {
    setCurrentColor( newColor );
  }



  return (
    <div className="App">
      <div className='container'>
        <div>
          <ColorForm />
        </div>
      </div>
    </div>
  );
}

export default App;
