import React, { useState } from 'react'
import { faqData } from './Data/faqData'
import './css/faq.css'

const Faq = () => {
  console.log(faqData)
  const [activeItem, setActiveItem] = useState(0)
  
  const onQuestionClick = (id) => {
    if(id === activeItem){
        setActiveItem(0)
    }
    else{
        setActiveItem(id);
    }
  } 
  return (
    <div>
        <ul style={{listStyleType:"none"}}>
         {faqData.map((faqItem) => {
            return  <li key={faqItem.id} className='quediv'>
                <div onClick={() => onQuestionClick(faqItem.id)} className='question'>
                    <span>Question {faqItem.id} - </span>
                    <span>{faqItem.question}</span>    
                </div>
                {
                    activeItem == faqItem.id ? 
                    <div className='answer'>
                        <span>Answer {faqItem.id} - </span>
                        <span>{faqItem.answer}</span>
                    </div> 
                    : null
                }
            </li>
         })}
        </ul>     
    </div>
  )
}


export default Faq
