import React from 'react'
import Props from './Props'
export default function Quiz() {
    const questions = [
        {
          question: "What is the capital of France?",
          answers: ["Paris", "London", "Rome", "Berlin"],
        },
        {
          question: "What is the square root of 16?",
          answers: ["4", "8", "12", "16"],
        },
        {
          question: "What is the name of the current US president?",
          answers: ["Joe Biden", "Donald Trump", "Barack Obama", "Bill Clinton"],
        },
      ];
  return (
    <div>
         { <div>
            {questions.map((value,index) =>(
                <Props dummy={value}/>
            ))
            }
        </div> }
            

    </div>
  );
}
