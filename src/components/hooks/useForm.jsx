import React, { useEffect, useState } from 'react'

const useForm = (initialData) => {
  const [values, setValues] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialData);

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]:value})

    setFormErrors({...formErrors, [name]: validateForm(name, value)})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = formErrors;

    if(name || email || password){
        console.log("There is some error with the form")
        return;
    }
    else{
        const {name, email, password} = values;
        console.log(name, email, password);
        setValues({name:"",email:"", password:""})
    }

  }

  const validateForm = (name, value) => {
    let error = "";
    if(name == 'name'){
        if(!value){
            error = "Please provide the valid input"
        }else if(value.length < 3){
            error = "Please provide Valid name"
        }
        else{
            error = ""
        }
    }
    
    if(name == 'email'){
        if(!value){
            error = "Please provide email"
        }else if(!value.includes('@')){
            error = "please provide valid email"
        }
        else{
            error = ""
        }
    }
    
    if(name == 'password'){
        if(!value){
            error = "please enter password"
        }else if(value.length < 8){
            error = "please provide valid password"
        }
        else{
            error = ""
        }
    }
    
    return error;
  }


  return {values, formErrors, handleOnChange, handleSubmit}
}

export default useForm;
