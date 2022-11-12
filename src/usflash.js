import {useState, useEffect, useRef} from 'react';
import useSound from 'use-sound';
import './flashcard.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import SFX from './correct.mp3';
import axios from "axios";
const Usflash = () => {

	const [num1, setNum1] = useState(2);
	const [num2, setNum2] = useState(5);
	const [ans, setAns] = useState(0);
	const [usans, setUsans] = useState(0);
	const [score, setScore] = useState(0);
	const [usscore, setUsscore] = useState(0);
	const [correct, setCorrect] = useState(true);
	const [usemail, setUsemail] = useState("");
	const [usglevel, setUsglevel] = useState("");
	const inputRef = useRef(null);
	const email = window.localStorage.getItem('Email');

	axios.get(`http://localhost:5000/register/${email}`)
	  .then((response) => {
	    console.log(response.data.email);
	    setUsemail(response.data.email);
	    setUsscore(response.data.score);
	    setUsglevel(response.data.glevel);
  	});


	  function randomNumberInRange(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
  	  }

  	const handleRan = () => {
  	setNum1(randomNumberInRange(0, 10));

  	setNum2(randomNumberInRange(0, 10));
  	setCorrect(false);


	}
   const handleAns = () => {

   	setCorrect(true);


   }
	return (

		<div className="c">

		<div className="card">
			
			<h1 className="usemail"> Welcome {usemail} ! </h1>
			<h1 className="usscore"> Current High Score: {usscore}  </h1>
			<h2 id= "num1">{num1}</h2>
			<h2 id = "num2">{num2}</h2>
			
			<input type="text" ref={inputRef} id="answer" name="answer" onChange={e => {setUsans(e.target.value);} }/>
			<Button onClick={e =>
				{
				 setCorrect(false)
				 setAns(num1 * num2)
				 if(num1 * num2 == usans){
				 	setScore(score + 1);

				 	if(usglevel == "2"){
					 	setNum1(randomNumberInRange(0, 10));
	  					setNum2(randomNumberInRange(0, 10));
  					} else if(usglevel == "3") {
					 	setNum1(randomNumberInRange(10, 50));
	  					setNum2(randomNumberInRange(10, 50));
  					
  					}
  					else if(usglevel == "4") {
					 	setNum1(randomNumberInRange(50, 100));
	  					setNum2(randomNumberInRange(50, 100));
  					
  					}
  					else if(usglevel == "5") {
					 	setNum1(randomNumberInRange(100, 5000));
	  					setNum2(randomNumberInRange(100, 5000));
  					
  					}
  					inputRef.current.value = "";
							
				 }
				 else {
				 	setScore(0);
				 	setCorrect(true)
				 	inputRef.current.value = "";
				 }

			}}> Submit answer </Button>
			

			<h2 id = "score">Score: {score}</h2>

			{usans == ans && <h2 style={{visibility: correct ? 'hidden' : 'visible'}}> Correct! </h2>}
			{usans != ans && <h2 style={{visibility: correct ? 'visible' : 'hidden' }}> Incorrect </h2>}

		</div>

		</div>
	);
};

export default Usflash;
