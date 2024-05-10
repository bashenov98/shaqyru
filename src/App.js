
import './App.css';

import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel'
import { useState } from 'react';
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'

function App() {
  const [selectedValue, setSelectedValue] = useState({});
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeText = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Value:', selectedValue);
  };

  return (
    <div className="App">
      <div className="header">

      </div>
      <h1>Тойға шақыру</h1>
      <div className="photo">

      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>Тойға келетініңізді растауыңызды сұраймыз</h3>
          <h4>Жұбайыңызбен келетін болсаңыз, екі есімді де көрсетіңіз</h4>
          <TextField
            label="Аты-жөніңіз"
            variant="outlined"
            value={inputText}
            onChange={handleChangeText}
            margin="normal"
            fullWidth
          />
          
          <RadioGroup aria-labelledby="radio-group" name="radio-buttons" value={selectedValue} onChange={handleChange}>
            <FormControlLabel value="option1" control={<Radio />} label="Әрине, келемін" />
            <FormControlLabel value="option2" control={<Radio />} label="Өкінішке орай, келе алмаймын" />
          </RadioGroup>
          <Button type="submit" variant="contained" color='success'>Жіберу</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
