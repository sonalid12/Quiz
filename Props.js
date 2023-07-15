import React from 'react'
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
import './Quiz.css'
import TextField   from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/FormLabel';

export default function Props(props) {
    const{question,answers} = props.dummy;

    const itemsListMap = answers.map((item, index) => (
      <li className="list1" key={index}>   
      <input className='list' type="radio" id="option1" name="option" value="option1"></input>
      {item}</li>
    ));
  return (
    <div className='container'>
       <div className='quiz'>

                <h3>{question}</h3>
                <ul>{itemsListMap}</ul>

       </div>
       <button className= "btn" variant="contained" type="submit">Submit</button>


     
    
    </div>
  );
}
