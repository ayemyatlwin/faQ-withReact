import React, { useState } from 'react'
import FaqItem from '../components/FaqItem.jsx'
import FaqNav from '../components/FaqNav.jsx'
import "./App.css"


function App() {


  const[faqList,SetFaqList]=useState([
    {
      id:1,
      question:"Can I get a trial before I purchase?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",      showAnswer :false
    },
    {
      id:2,
      question:"What is your return policy?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",      showAnswer :false
    },
    {
      id:3,
      question:"How do I track my order?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",      showAnswer :false
    },
    {
      id:4,
      question:"How do I update my privacy settings?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
      showAnswer:false
    },
    {
      id:5,
      question:"How do I change or update my payment?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
      showAnswer:false
    },
    {
      id:6,
      question:"How do I delete my account?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
      showAnswer:false
    }
  ])
  function openAnswer(id){
    //console.log(id)
    SetFaqList(faqList.map((faqList)=>{
      if(faqList.id===id){
        faqList.showAnswer=!faqList.showAnswer;
      }else{
        faqList.showAnswer=false;
      }
      return faqList;
    }))
  }
 return(

  <>
  <FaqNav/>
  {faqList.map((faqList)=>(<FaqItem openAnswer={openAnswer} key={faqList.id} faqList={faqList}/>))}

  </>
 )
}

export default App