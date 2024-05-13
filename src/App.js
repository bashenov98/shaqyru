

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
  const [mobile, setMobile] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    answer: ''
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeText = (event) => {
    setInputText(event.target.value);
  };

  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };

  const Submit = async (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    const token = '7101981316:AAGrugzrt7e25mIkbzl_ee8ZO8INAFsrst0';
    const text = (`${inputText}: ${selectedValue}`);

    setFormData({ Name: inputText, Mobile: '87719052133', Answer: selectedValue })

    const response = await axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=-4241267745&text=${text}`, {
    });
    const response2 = await axios.post('https://script.google.com/macros/s/AKfycbxQd66HA8lMwLTC-unavVzbzhynHSf7hBL0IUJ_jvAXaViC3kw_yVhyzTPi1RdvX0Uqrg/exec',  formDatab, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    )
    console.log(response)
    console.log(response2)
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
        <h4>Алматы қаласы,<br />
          Ремизовка, Арайлы көшесі, 16<br />
          “Eleven HOTEL&HALL”,<br />
          BALLROOM</h4>
      </div>

      <div className="form">
        <form onSubmit={(e) => Submit(e)}>
          <h3>Тойға келетініңізді растауыңызды сұраймыз</h3>
          <h4>Жұбайыңызбен келетін болсаңыз, екі есімді де көрсетіңіз</h4>
          <TextField
            label="Аты-жөніңіз"
            variant="outlined"
            value={inputText}
            onChange={handleChangeText}
            margin="normal"
            name='Name'
            fullWidth
          />

          <TextField
            label="Телефон нөміріңіз"
            variant="outlined"
            value={mobile}
            onChange={handleChangeMobile}
            margin="normal"
            name='Mobile'
            fullWidth
          />

          <RadioGroup aria-labelledby="radio-group" name="Answer" value={selectedValue} onChange={handleChange}>
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
