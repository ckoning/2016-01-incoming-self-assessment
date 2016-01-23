$(document).ready(function(){

	event.preventDefault();
	// our current count, attached to the upper right hand corner of the browser
	var $currentCount = $('#counter')
	// the element holding the form
	var question = $('#question');
	// the element holding the username collection
	var usernameField = $('#user');
	// Set the visibility
	if( !app.user ) {
		question.hide();
		usernameField.show();
	} else {
		question.show();
		usernameField.hide();
	}
	// our current form which will hold the question and subsequent answers loaded in the app.questions object.
	var $currentForm = $('form');
	// creates our first random question upon generating the game.html file
	var firstRandomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];

	// attaches the counter to the highscore on page
	$currentCount.text(app.count);

	// attaches the first question to the form onload
	$currentForm.prepend('<h3 class = "question"> Question: ' + firstRandomQuestion.question + '</h3>' + '<br><br>');

	// appends all four answers to the corresponding question
	var answerGenerator = function (randomQuestion){
		// Get the choices
		var choices = randomQuestion.choices;
		// Loop and append
		for( var i in choices) {
			// Create a select element
			var $radio = $('<div class="radio"><input type="radio" name="answer" value="'+i+'" > '+choices[i]+'</div>');
			// Add the choice to the form
			$currentForm.append($radio);
		}
	};

	// adds a random question and its corresponding answers to our currentForm
	var QandAgenerator = function(){
		// Get a random question (pulled from data_generator.js)
		app.randomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
		// Add the random question to the page)
		$currentForm.prepend('<h3 class = "question"> Question: ' + app.randomQuestion.question + '</h3>' + '<br><br>');
		// Add the random question's answers
		answerGenerator(app.randomQuestion);
	};

	// checks the answer when the user clicks "Am I right?"
	$('#checkAnswer').on('click',function(){
		event.preventDefault();
		// represents whichever check box the user clicks on
		$userInput = $('input:checked');
		if(app.randomQuestion.choices[$userInput.val()] === app.randomQuestion.correct ){
			app.successDisplay();
			app.countIncrementor();
			$currentCount.empty().append(app.count);
			$('.choices').empty().append(QandAgenerator());
		} else {
			app.failureDisplay();
		}
	});

	$('#restart').on('click', function(){
		location.reload();
	});

	// get the user
	$('#setUser').on('click',function(){
		event.preventDefault();
		// Get the username
		app.username = $('#username').val();
		console.log(app.username);
		// Generate the first question
		console.log(firstRandomQuestion);
		answerGenerator(firstRandomQuestion);
		// Hide the username field
		usernameField.hide();
		// Show the question
		question.show();
	});
});
