import {useState, useEffect, useRef} from 'react';
import useSound from 'use-sound';
import './flashcard.css';
import Button from 'react-bootstrap/Button';
import SFX from './correct.mp3';
const Flashcard = () => {

	const [num1, setNum1] = useState(2);
	const [num2, setNum2] = useState(5);
	const [ans, setAns] = useState(0);
	const [usans, setUsans] = useState(0);
	const [score, setScore] = useState(0);
	const [correct, setCorrect] = useState(true);
	const inputRef = useRef(null);


	const [playActive] = useSound(
		'./correct.mp3',
		{volume: 0.25}

	);
	const [playOn] = useSound(
    './correct.mp3',
    { volume: 0.25 }
 	);

	useEffect(() => {},[ans])


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

			<h2 id= "num1">{num1}</h2>
			<h2 id = "num2">{num2}</h2>

			<input type="text" ref={inputRef} id="answer" name="answer" onChange={e => {setUsans(e.target.value);} }/>
			<Button onClick={e =>
				{
					setCorrect(false)
				 setAns(num1 * num2)
				 if(num1 * num2 == usans){
				 	setScore(score + 1);
				 	setNum1(randomNumberInRange(0, 10));
  					setNum2(randomNumberInRange(0, 10));
  						inputRef.current.value = "";
							playOn(e);
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

export default Flashcard;
