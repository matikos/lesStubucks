import React from 'react';
import './coffeeForm.css'



const coffeeForm = () => {
    return (
      <form action='/createCoffee' method='POST'>
     
        <label for='name'>name:</label>
      <input name='name' type='text'></input>
      <label for='drik'>drink:</label>
      <input name='drink' type='text'></input>
      <label for='extras'>extras:</label>
      <input name='extras' type='text'></input>
      <label for='size'>size:</label>
      <input name='size' type='text'></input>
      <label for='amount'>amount:</label>
      <input name='amount' type='number'></input>
      <br></br>
      <input type='submit'></input>
    </form> 
    
    )
};


export default coffeeForm;




