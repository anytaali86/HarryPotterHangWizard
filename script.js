// Global Variables 
//--------------------------------------------
//--------------------------------------------
var mysteryWord = ["malfoy", "voldemort", "bella", "hermoine", "sirius", "neville", "ginny", "ron", "hermoine"];

// //store displayed word 
var displayedWord = "";   //choosenWord 

//storing the displayed word into split. 
var splitWords = []; //lettersInWords 

//storing correct guesses.
var CorrectGuess = [];   //blanksAndSuccesses 

var numOfBlanks =0; 

//Counter Variables 
var winScores = 0; 
var lossCount = 0; 
var guessesLeft = 10; 
var rightGuess= 0;  //rightguess counter 

var wrongLetters = []; 
var test = true; 

var letters = ['a','b','c', 'd','e','f', 'g','h','i', 'j','k','l', 'm','n','o','p','q','r',
's','t','u', 'v','w','x', 'y','z'];

//CODES : MAIN GAME

//GAME STARTS 
//----------------------------------------------
//----------------------------------------------

function begins() { 
		//choose a word randomly from MysteryWord 
		displayedWord = mysteryWord[Math.floor(Math.random() * mysteryWord.length)];
		//slipting choosen word into letters
		// console.log(displayedWord);
		splitWords = displayedWord.split(''); 
		//count them in numbers 
		numOfBlanks = splitWords.length; 
		// console.log(numOfBlanks); 

		//populate the blanks 
		for(var i=0; i<numOfBlanks; i++) {
			CorrectGuess.push('_'); 
			document.getElementById('wordToGuess').innerHTML = CorrectGuess; 
			// console.log("CorrectGuess");

		}  //for Ending
	
	//Modifying HTML 
	document.getElementById("wordToGuess").innerHTML = CorrectGuess.join(' ');
	document.getElementById("wrongGuesses").innerHTML = wrongLetters;
	document.getElementById("numGuesses").innerHTML = guessesLeft; 
	document.getElementById("winCounter").innerHTML = winScores; 
	document.getElementById("lossCounter").innerHTML =  lossCount; 

}   //function begins ending 



	//comparing the type alphabet to the Mystery word. 
function comparision(userKey) 
{
	if(displayedWord.indexOf(userKey) > -1 ) //greater than -1 means the letter exist in our mystery word. 
	{  
		for (var i=0; i < numOfBlanks; i++) 
		{
			if(splitWords[i] === userKey) 
			{
				rightGuess ++;
				CorrectGuess[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = CorrectGuess.join(' '); 
			}
 
			// console.log(CorrectGuess);
		}
	}
	else 
	{
			wrongLetters.push(userKey); 
			guessesLeft--; //reduces the guesses by 1 on every wrong guess
			//changes in HTML
			document.getElementById('numGuesses').innerHTML = guessesLeft;
			document.getElementById('wrongGuesses').innerHTML = wrongLetters; 
	}	
}
	 
	// function decision
	
function desicion()
{ 
	if (rightGuess === numOfBlanks)
	{
		winScores++; 
		document.getElementById('winCounter').innerHTML = winScores; 
		swal("You saved an innocent wizard!!"); 
		reset(); 
	}
	else if( guessesLeft === 0)
	{ 
		lossCount++;
		//modify document 
		document.getElementById('lossCounter').innerHTML = lossCount;  
		swal("Another Wizard has been hanged, just because you cant guess it!"); 
		reset(); 
	}

}

function reset()  
{ 
		//choose a word randomly from MysteryWord 
		displayedWord = mysteryWord[Math.floor(Math.random() * mysteryWord.length)];
		//slipting choosen word into letters
		// console.log(displayedWord);
		splitWords = displayedWord.split(''); 
		//count them in numbers 
		numOfBlanks = splitWords.length; 
		// console.log(numOfBlanks); 

		//reset values 
		letterGuessed = 0;
		rightGuess = 0;
		guessesLeft = 10;
		wrongLetters =[];
		CorrectGuess =[];
		letters = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

		test=false;
		begins();

}


// Initiate the Game: 
begins(); 
		document.onkeyup = function (event) 
		{	test=true; 
			var letterGuessed = event.key; 
			// console.log(letterGuessed);  
			  for (var i=0; i<letters.length; i++) 
			    {
			  		if ( letterGuessed === letters[i]  && test ===true)  
			  		{
			  			var insert =  letters.splice(i,1);
			  			
			  			//test
			  			// console.log('double word is =' + letters[i]);  
			  			// console.log('spliced word is = ' + insert); 

			  			comparision(letterGuessed);
			  			desicion(); 
			  		} //if ends 
			    } //for ends
		} //function onkeyup 

