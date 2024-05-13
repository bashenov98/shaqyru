

import './App.css';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel'
import { useState } from 'react';
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import axios from 'axios';

function App() {
  const [selectedValue, setSelectedValue] = useState({});
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeText = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = '7101981316:AAGrugzrt7e25mIkbzl_ee8ZO8INAFsrst0';
    const text = (`${inputText}: ${selectedValue}`);

    const response = await axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=-4241267745&text=${text}`, {
    });
    console.log(response)
  };

  return (
    <div className="App">
      <div className="header">

      </div>
      <h1>Тойға шақыру</h1>
      <div className="photo">
      </div>

      <div>
        <h2>Той иелері:</h2>
        <h3>Жамантай-Гүлсұлу</h3>
      </div>
      <div>
        <h2>Той салтанаты</h2>
        <h4>Күні: 10.08.2024</h4>
        <h4>Басталуы: 17:00</h4>
      </div>
      <div>
        <h2>Мекенжайымыз:</h2>
        <h4>Алматы қаласы,<br/>
          Ремизовка, Арайлы көшесі, 16<br/>
          “Eleven HOTEL&HALL”,<br/>
          BALLROOM</h4>
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
            <FormControlLabel value="Әрине, келемін" control={<Radio />} label="Әрине, келемін" />
            <FormControlLabel value="Әлі белгісіз" control={<Radio />} label="Әлі белгісіз" />
            <FormControlLabel value="Өкінішке орай, келе алмаймын" control={<Radio />} label="Өкінішке орай, келе алмаймын" />
          </RadioGroup>
          <div className='submitButton'>
            <Button type="submit" variant="contained" color='success'>Жіберу</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
