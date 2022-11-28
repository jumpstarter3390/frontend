import {useState, useEffect, useRef} from 'react';
import useSound from 'use-sound';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import axios from "axios";
import Header from "./Header";
import './flashcard.css';


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
	const [usid, setUsid] = useState(0);
	const inputRef = useRef(null);
	const email = window.localStorage.getItem('Email');

	 const [playbackRate, setPlaybackRate] = useState(0.75);
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

	useEffect(() => {
		axios.get(`http://localhost:5000/register/${email}`)
	  	.then((response) => {
		    console.log(response.data.email);
		    setUsemail(response.data.email);
		    setUsscore(response.data.score);
		    setUsglevel(response.data.glevel);
		    setUsid(response.data._id);
		    window.localStorage.setItem('Id', usid);
  		});


	}, []);

	const putUsscore = () => {
		axios.put(`http://localhost:5000/register/update/${usid}`, {
			score: usscore,
			isLoggedIn: true,
		});
	}


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

		<div className="fc">

		<div className="fcard">

			<h1 className="fusemail"> Welcome {usemail} ! </h1>
			<h1 className="fusscore"> Current High Score: {usscore}  </h1>
			<h2 id= "fnum1">{num1}</h2>
			<h2 id = "fnum2">{num2}</h2>

			<input type="text" ref={inputRef} id="fanswer" name="answer" onChange={e => {setUsans(e.target.value);} }/>
			<Button id="fButton" onClick={e =>
				{
				 setCorrect(false)
				 setAns(num1 * num2)
				 if(num1 * num2 == usans){
				 	setScore(score + 1);
				 	handleClick();

				 	if(usglevel == "2"){
					 	setNum1(randomNumberInRange(0, 10));
	  					setNum2(randomNumberInRange(0, 10));
  					}

						 else if(usglevel == "3") {
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

  					if(score > usscore) {
  						setUsscore(score + 1);
  						putUsscore();
  					}
  					inputRef.current.value = "";

				 }
				 else {
				 	handleClick2();
				 	if(score > usscore) {
  						setUsscore(score);
  						putUsscore();
  					}
				 	setScore(0);
				 	setCorrect(true)
				 	inputRef.current.value = "";
				 }

			}}> Submit answer </Button>


			<h2 id = "fscore">Score: {score}</h2>

			{usans == ans && <h2 id ="vis" style={{visibility: correct ? 'hidden' : 'visible'}}> Correct! </h2>}
			{usans != ans && <h2 id = "vis" style={{visibility: correct ? 'visible' : 'hidden' }}> Incorrect </h2>}

		</div>

		</div>
	);
};

export default Usflash;
