  
import React from 'react';

export default function Form(props) {

  const { values, errors, update, submit, disabled } = props;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    update(name, type === 'checkbox' ? checked : value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      
        <label>Name
          <input
            type='text'
            value={values.name}
            onChange={onChange}
            name='name'
            placeholder='Name'
            maxLength='32'
          />
        </label>
        <label>Email
          <input
            type='text'
            value={values.email}
            onChange={onChange}
            name='email'
            placeholder='Email'
            maxLength='32'
          />
        </label>
        <label>Password
          <input
            type='text'
            value={values.password}
            onChange={onChange}
            name='password'
            placeholder='Password'
            maxLength='32'
          />
        </label>
        
        <label >Terms of Service
          <input
            type='checkbox'
            value={values.terms}
            onChange={onChange}
            name='terms'
            checked={values.terms}
          />
        </label>
        <div className='submit'>
          <button disabled={disabled}>Submit</button>
       
      </div>
    </form>
  )

}