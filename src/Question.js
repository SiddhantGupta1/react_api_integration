import React from 'react';
import style from './question.module.css';

let sum=[];
let score = 0;

const Question = ({ question, correct, incorrect, id, answers0, answers1, answers2, answers3, setAnswers0, setAnswers1, setAnswers2, setAnswers3, settingAnswers, setNext }) => {

    const option=[correct, ...incorrect];
    option.sort();
    let counter=0;
    const handleAnswer = (num) => {
        option[num] === correct ? counter=1 : counter=0 ; 
        sum[id] = counter;
    };

    const toggle0 = () => {
        settingAnswers();
        if(answers0===style.answer) {
            setAnswers0(style.option);
            setNext(true);
        } 
        else{
            setAnswers0(style.answer);
            setNext(false);
        }
      };

    const toggle1 = () => {
        settingAnswers();
        if(answers1===style.answer) {
            setAnswers1(style.option); 
            setNext(true);
        } 
        else{
            setAnswers1(style.answer);
            setNext(false);
        }
      };

    const toggle2 = () => {
        settingAnswers(); 
        if(answers2===style.answer) {
            setAnswers2(style.option);            
            setNext(true);
        } 
        else{
            setAnswers2(style.answer);
            setNext(false);
        }
      };

    const toggle3 = () => {
        settingAnswers();  
        if(answers3===style.answer) {
            setAnswers3(style.option);
            setNext(true);
        } 
        else{
            setAnswers3(style.answer);
            setNext(false);
        }
      };

    return option.length>2 ? (
        <div className={style.questions}>
            <h1 className={style.title}>Question {id+1}</h1>
            <p className={style.question} dangerouslySetInnerHTML={{__html: question }}/>
            <ol type="A" className={style.options}>

                <li type="A" onClick={()=>{ toggle0(); }  } className={ answers0 } dangerouslySetInnerHTML={{__html: option[0] }}/>
                <li type="A" onClick={()=>{ toggle1(); }  } className={ answers1 } dangerouslySetInnerHTML={{__html: option[1] }}/>
                <li type="A" onClick={()=>{ toggle2(); }  } className={ answers2 } dangerouslySetInnerHTML={{__html: option[2] }}/>
                <li type="A" onClick={()=>{ toggle3(); }  } className={ answers3 } dangerouslySetInnerHTML={{__html: option[3] }}/>
                                    
            </ol>
        </div>
    ) : (
        <div className={style.questions}>
            <h1 className={style.title}>Question {id+1}</h1>
            <p className={style.question} dangerouslySetInnerHTML={{__html: question }}/>
            <div type="A" className={style.options}>

                <li type="A" onClick={()=>{ toggle0(); }  } className={ answers0 } dangerouslySetInnerHTML={{__html: option[0] }}/>
                <li type="A" onClick={()=>{ toggle1(); }  } className={ answers1 } dangerouslySetInnerHTML={{__html: option[1] }}/>
                                    
            </div>
        </div>
    )
};

export default Question;

/*  */