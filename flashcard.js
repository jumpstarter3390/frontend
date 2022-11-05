import {useState, useEffect} from 'react';
import './flashcard.css';
import Button from 'react-bootstrap/Button';

const Flashcard = () => {

	const [num1, setNum1] = useState(2);
	const [num2, setNum2] = useState(5);
	const [ans, setAns] = useState(0);
	const [usans, setUsans] = useState(0);
	const [score, setScore] = useState(0);
	const [correct, setCorrect] = useState(true);

	useEffect(() => { },[ans]) 


	  function randomNumberInRange(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
  	  }

  	const handleRan = () => {
  	setNum1(randomNumberInRange(0, 10));
  	
  	setNum2(randomNumberInRange(0, 10));
  	setCorrect(true);


	}
   const handleAns = () => {

   	setCorrect(true);
 

   }
	return (


		<div className="center">
		<div className="card">	
			<Button onClick={e => {
				handleRan()
				
			}}> Click to get new Problem</Button>
			
			<h2>{num1}</h2>
			<h3> X </h3>
			<h2>{num2}</h2>

			<input type="text" id="answer" name="answer" onChange={e => setUsans(e.target.value)}/>
			<Button  onClick={e => 
				{setCorrect(false)
				 setAns(num1 * num2)
				 if(num1 * num2 == usans){
				 	setScore(score + 1);
				 }
				 else {
				 	setScore(0);
				 }
				 
			}}> Submit answer </Button>

			<h2>Score: {score}</h2>
			
			{usans == ans && <h2 style={{visibility: correct ? 'hidden' : 'visible'}}> Correct! </h2>}
			{usans != ans && <h2 style={{visibility: correct ? 'hidden' : 'visible'}}> Incorrect! </h2>}
			
		</div>
		</div>

	);

};

export default Flashcard;