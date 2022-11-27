import React from 'react';
import {useState, useEffect, useRef} from 'react';
import useSound from 'use-sound';
import './flashcard.css';
import Button from 'react-bootstrap/Button';

const Flashcard = () => {

	const [num1, setNum1] = useState(2);
	const [num2, setNum2] = useState(5);
	const [ans, setAns] = useState(0);
	const [usans, setUsans] = useState(0);
	const [score, setScore] = useState(0);
	const [correct, setCorrect] = useState(true);
	const inputRef = useRef(null);
  const [playbackRate, setPlaybackRate] = React.useState(0.75);
	const soundUrl = 'https://github.com/jumpstarter3390/frontend/blob/main/src/success.mp3?raw=true';
	const wrong = 'https://github.com/jumpstarter3390/frontend/blob/main/src/incorrect.mp3?raw=true';

	const [play] = useSound(soundUrl, {
		playbackRate,
		volume: 1,
	});

	const handleClick = () => {
     setPlaybackRate(playbackRate + 0.1);
     play();
   };

	 const [play2] = useSound(wrong, {
		 playbackRate,
		 volume: 1,
	 });

	 const handleClick2 = () => {
			 setPlaybackRate(playbackRate + 0.1);
			 play2();
		 };

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
			<Button onClick={() =>
				{
					setUsans()
					setCorrect(false)
				  setAns(num1 * num2)

				  	if(num1 * num2 == usans){
					 		setScore(score + 1);
				 			setNum1(randomNumberInRange(0, 10));
  						setNum2(randomNumberInRange(0, 10));
  						inputRef.current.value = "";
							handleClick();

				 		}
				 		else {
				 			setScore(0);
				 			setCorrect(true)
				 			inputRef.current.value = "";
							handleClick2();
				 		}
					}}> Submit answer </Button>

			<h2 id = "score">Score: {score}</h2>

			{usans == ans && <h2 style={{visibility: correct ? 'hidden' : 'visible'}} > Correct! </h2>}
			{usans != ans && <h2 style={{visibility: correct ? 'visible' : 'hidden' }}> Incorrect </h2>}

		</div>
		</div>
	);
};

export default Flashcard;
