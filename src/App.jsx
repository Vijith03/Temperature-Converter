import { useState } from 'react'

import './App.css'

function App() {
  
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemp, setConvertedTemp] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === '') {
      setTemperature(value);
      convertTemperature(value, unit);
    }
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);
    convertTemperature(temperature, newUnit);
  };

  const convertTemperature = (value, currentUnit) => {
    if (value === '') {
      setConvertedTemp('');
      return;
    }
    const temp = parseFloat(value);
    const converted =
      currentUnit === 'Celsius'
        ? (temp * 9) / 5 + 32 
        : ((temp - 32) * 5) / 9; 
    setConvertedTemp(converted.toFixed(2) + (currentUnit === 'Celsius' ? ' °F' : ' °C'));
  };

  const clearFields = () => {
    setTemperature('');
    setConvertedTemp('');
  };
  return (
    <>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Temperature Converter</h1>
            <input type="text"
                value={temperature}
                onChange={handleInputChange}
                placeholder="Enter temperature"
                style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
            />
            <div>
                <select
                    value={unit}
                    onChange={handleUnitChange}
                    style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
                >
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                </select>
            </div>
            <h2>{convertedTemp ? `Converted: ${convertedTemp}` : 'Converted: --'}</h2>

            <button
                onClick={clearFields}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Clear
            </button>
        </div>
    </>
  )
}

export default App
