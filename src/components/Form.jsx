import React, { useState } from 'react'
import useForm from './hooks/useForm';

const Form = () => {
  const {values, formErrors, handleOnChange, handleSubmit} = useForm({name:"", email:"", password:""})

  console.log(formErrors)
 
  return (
    <div>
      <form>
        <div className='formgroup'>
            <label>Name:-</label>
            <input name='name' type="text" value={values.name} onChange={(e) => handleOnChange(e)}/>
            {formErrors.name && <p style={{color:"red"}}>{formErrors.name}</p>}
        </div>
        <div className='formgroup'>
            <label>Email:-</label>
            <input name="email" type="text" value={values.email} onChange={(e) => handleOnChange(e)}/>
            {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
        </div>
        <div className='formgroup'>
            <label>Password:-</label>
            <input name='password' type="text" value={values.password} onChange={(e) => handleOnChange(e)}/>
            {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
