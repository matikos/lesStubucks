import React from 'react';
import './coffeeForm.css'



const logForm = () => {
    return (
      <form action='/createUser' method='POST'>
     
        
      <label for='password'>password:</label>
      <input name='password' type='string'></input>
      <br></br>
      <input type='submit'></input>
    </form> 
    
    )
};


export default logForm;




