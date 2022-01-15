import { useState } from "react";
import { useDispatch } from "react-redux";
import {  setCityData } from "../store/action";
import { StyledInput } from "./input.styled";


export const Input = () => {
  const [cityName,setCityName]=useState('')
  const dispatch=useDispatch()

const handleSubmit=(e)=>{
  if(cityName.trim()){
    dispatch(setCityData(cityName))
    setCityName('')
  }
}

const handleChange = (e) => {
  setCityName(e.currentTarget.value);
  
};



 const onKeyPress=(e)=>{
  if(e.key==="Enter"){
    handleSubmit(e)
  }
 }
  return (
    
      <StyledInput 
      type="input" 
      placeholder="Введи город" 
      value={cityName}
      onKeyPress={onKeyPress}
      onChange={handleChange}
      />
  );
};
