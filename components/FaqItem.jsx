import React, { useState } from 'react';


function FaqItem({faqList,openAnswer}) {
    //const[showAnswer,setShowAnswer]=useState(false);
    const showQuestionBg=faqList.showAnswer? "bg-primary text-white" : "";

  return (
    <>
    <div className="m-3 ">
        <div 
        onClick={()=>openAnswer(faqList.id)} 
        className= {` ${showQuestionBg} d-flex border border-primary p-2 m-2 rounded text-primary`} >
            {faqList.question}
           
            <span className="ms-auto"><i className={` bi bi-chevron-down ${faqList.showAnswer?"bi bi-chevron-up":""}`}></i></span>
        </div>
       {faqList.showAnswer&& ( <div className='px-3 animate__animated animate__fadeIn text-black-50'>
            {faqList.answer}
        </div>)}
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default FaqItem