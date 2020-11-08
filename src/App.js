import React,{useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import style from './question.module.css'

const App = () => {
  const [ques, setQues] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(true);

    const [answers0, setAnswers0] = useState(style.option);
    const [answers1, setAnswers1] = useState(style.option);
    const [answers2, setAnswers2] = useState(style.option);
    const [answers3, setAnswers3] = useState(style.option);

    const settingAnswers = () => {
        setAnswers0(style.option)
        setAnswers1(style.option)
        setAnswers2(style.option)
        setAnswers3(style.option)
        setNext(true)
    };

    useEffect( () => {
      getQuestion();
    },[]);


    const getQuestion = async () => {
      const questions = await fetch('https://opentdb.com/api.php?amount=10&category=18');
      const data = await questions.json();
      setQues(data.results);
    };

    const nextQuestion = () => {
      if(count<9){
        setCount(count+1);
      }    
    }
    const number=[1,2,3,4,5,6,7,8,9,10];
    const questionJump = (number) => {
      setCount(number-1);
    };

  if(ques.length > 0 ){
    return (
      <div className="App">
        <h1 className="head">GenY</h1>
        <div className="bar">
          <div className="progress">
            <p className="completed">{count+1}/10 Questions</p>
            <progress className="progressBar" value={count+1} max="10"> </progress>
            <div className="timer"> {() => { 
                  const startingTime = 10;
                  let time = startingTime * 60;
      
                  setInterval(updateTimer,1000);
                  function updateTimer() {
                    const minutes = Math.floor(time/60);
                    let seconds = time % 60;
                    seconds = seconds < 10 ? '0' + seconds : seconds;
                    console.log(seconds);
                    time--;
                  }
                }
              } </div>
          </div>
        </div>
        <section className="questions">
          {number.map(number => (
            <li>
              <button onClick={()=> {questionJump(number); settingAnswers();}} className="questionNumber" >{number}</button>
            </li>
          ),10)}
          
        </section>
        <div className="main">
          <Question
          
            question = {ques[count].question}
            correct = {ques[count].correct_answer}
            incorrect = {ques[count].incorrect_answers}
            id = {count}
            answers0={answers0}
            answers1={answers1}
            answers2={answers2}
            answers3={answers3}
            setAnswers0={setAnswers0}
            setAnswers1={setAnswers1}
            setAnswers2={setAnswers2}
            setAnswers3={setAnswers3}
            settingAnswers={settingAnswers}
            setNext={setNext}
        
          />
        </div>
        <div className="buttons">
          <button className="btn" onClick={()=> {nextQuestion(); settingAnswers();}}>Skip ></button>
          <button className="btn">Remark</button>
          <button disabled={next} className="btn" onClick={()=> {nextQuestion(); settingAnswers();}}>Next ></button>
        </div>
      </div>
    )
  }
  else{
    return(
      <h1 className="loading">Loading...</h1>
    )
  } 
};

export default App;

/*               <button className="btn" onClick={()=> {nextQuestion(); settingAnswers();}}>Next ></button>
*/