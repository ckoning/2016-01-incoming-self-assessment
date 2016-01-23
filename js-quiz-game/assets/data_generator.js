window.app = {};
	// questions that will be generated for the user.
app.questions = [{
		'question': 'Math.round(-20.51) = ?',
		'choices': ['20','-21','19','none of the above'],
		'correct': '-21',
		'refPage': 'http://www.w3schools.com/jsref/jsref_round.asp'
	},
	{
		'question':'Scripting languages are ?',
		'choices': ['High level programming languages', 'Assembly Level programming languages', 'Machine level programming language'],
		'correct': 'High level programming languages',
		'refPage': 'http://stackoverflow.com/questions/968461/why-javascript-is-called-as-scripting-language'
	},
	{
		'question': 'Which best explains getSelection()?',
		'choices': ['Returns the VALUE of a selected OPTION.', 'Returns document.URL of the window in focus.', 'Returns the value of cursor-selected text', ' Returns the VALUE of a checked radio input.'],
		'correct': 'Returns the value of cursor-selected text',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection'
	},
	{
		'question': "ParseInt('15',10) = ?",
		'choices': ['15','10','151','150'],
		'correct': '15',
		'refPage': 'http://www.w3schools.com/jsref/jsref_parseint.asp'
	},
	{
		'question': 'In Javascript, What does isNaN function do ?',
		'choices': ['Return true if the argument is not a number.','Return false if the argument is not a number.', 'Return true if the argument is a number.','None of the above'],
		'correct': 'Return true if the argument is not a number.',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN'
	},
	{
		'question':'Which of the following is true?',
		'choices': ['If onKeyDown returns false, the key-press event is cancelled.','If onKeyPress returns false, the key-down event is cancelled.', 'If onKeyDown returns false, the key-up event is cancelled.','If onKeyPress returns false, the key-up event is canceled.'],
		'correct': 'If onKeyDown returns false, the key-press event is cancelled.',
		'refPage': 'http://www.w3schools.com/jsref/event_onkeydown.asp'

	},{
		'question':'Choose the client-side JavaScript object:',
		'choices': ['Database','Cursor','Client','FileUpLoad'],
		'correct': 'FileUpLoad',
		'refPage': 'https://docs.oracle.com/cd/E19957-01/816-6409-10/navobj.htm'

	},{
		'question':'What is mean by "this" keyword in javascript?',
		'choices': ['It refers current object','It referes previous object','It is variable which contains value','None of the above'],
		'correct': 'It refers current object',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this'

	},{
		'question':'In JavaScript, Window.prompt() method return true or false value ?',
		'choices': ['False','True','None of the Above'],
		'correct': 'False',
		'refPage': 'http://www.w3schools.com/jsref/met_win_prompt.asp'

	},{
		'question':'parseFloat(9+10) = ?',
		'choices': ['19','910','None'],
		'correct': 'None',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat'

	},{
		'question':'If x = 103 & y = 9 then x % = y , what is the value of x after executing x % = y?',
		'choices': ['4','3','2','5'],
		'correct': '4',
		'refPage': 'http://www.w3schools.com/js/js_operators.asp'

	},{
		'question':'Choose the external object',
		'choices': ['Date','Option','Layer','Checkbox'],
		'correct': 'Checkbox',
		'refPage': 'https://msdn.microsoft.com/en-us/library/ms535246(v=vs.85).aspx'

	},{
		'question':'Which JavaScript feature uses JAR files?',
		'choices': ['Object signing','Style sheets','Netcaster channels','Image rollovers'],
		'correct': 'Object signing',
		'refPage': 'https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html'

	},{
		'question':'How do you assign a function to a variable with the JavaScript Function contructor ?',
		'choices': ['var f=Function("x","y","return x+y");','var f=Function(x,y){ return x+y;}','var f= new Function("x", "y", "return x + y");'],
		'correct': 'var f= new Function("x", "y", "return x + y");',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function'

	},{
		'question':'?_name is it valid javascript identifier?',
		'choices': ['Yes','No'],
		'correct': 'No',
		'refPage': 'http://stackoverflow.com/questions/1661197/what-characters-are-valid-for-javascript-variable-names'

	},{
		'question':'Which best describes void?',
		'choices': ['A method','A function','A statement','An operator'],
		'correct': 'An operator',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void'

	},{
		'question':'Who invented the javascript programming language?',
		'choices': ['Tennis Ritchie','ames Gosling','Brendan Eich'],
		'correct': 'Brendan Eich',
		'refPage': 'https://en.wikipedia.org/wiki/JavaScript'

	},{
		'question':'How do you specify the color of the hypertext links with JavaScript ?',
		'choices': ['document.linkColor="#00FF00";','document.LColor="#00FF00";','document.LinkC="#00FF00";','document.hyperTextLink="#00FF00":'],
		'correct': 'document.linkColor="#00FF00";',
		'refPage': 'http://stackoverflow.com/questions/5131379/how-to-change-the-color-of-the-links-with-javascript'

	},{
		'question':'--------------- method returns the number of milliseconds in a date string.',
		'choices': ['setHours()','setMinutes()','parse()'],
		'correct': 'parse()',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse'

	},{
		'question':'Which is not an attribute of the cookie property?',
		'choices': ['path','host','secure','domain'],
		'correct': 'host',
		'refPage': 'http://www.w3schools.com/jsref/prop_doc_cookie.asp'

	},{
		'question':'How do substring() and substr() differ?',
		'choices': ['One is not a method of the String object.','substr() takes three arguments, substring() only two.','Only one accepts a desired string length as an argument.','Besides the spelling, nothing.'],
		'correct': 'Only one accepts a desired string length as an argument.',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring'

	},{
		'question':'Which is not a reserved word?',
		'choices': ['interface','short','program','throws'],
		'correct': 'program',
		'refPage': 'http://www.w3schools.com/js/js_reserved.asp'

	},{
		'question':'In Javascript, Which of the following method is used to find out the character at a position in a string?',
		'choices': ['charAt()','CharacterAt()','CharPos()','characAt()'],
		'correct': 'charAt()',
		'refPage': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt'

	},{
		'question':'How do you delete an element from an options array?',
		'choices': ['Set it to false.','Set it to null.','Set it to undefined.','Set it to -1'],
		'correct': 'Set it to null.',
		'refPage': 'http://stackoverflow.com/questions/500606/javascript-array-delete-elements'

	}
];

app.count = 0;

app.username = null;

app.countIncrementor = function(){
	app.count++;
	console.log("I've been counting!")
};

//displayed when user gets answer correct
app.successDisplay = function(){
	var msg = 'you are correct!';
	if(app.username) {
		msg = app.username+' ,' + msg;
	} else {
		msg = msg.charAt(0).toUpperCase() + msg.slice(1);
	}
	alert(msg);
};

//displayed when user gets answer wrong
app.failureDisplay = function(){
	$('#checkAnswer').hide();
	$('.jsPic').hide();
	$('form').empty().append('<div class="wrong"><img src = "photos/redcheckmark.png"></div><br><br>').append('<button class="btn-lg" id="restart"> Start Over');
	$('body').append('<div align="center" class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">close</button><strong>Oh snap!</strong> <a href=' + app.randomQuestion.refPage + ' class="alert-link">Hit up this link and educate yourself</a> then come back for another round!</div>');

};


//this is the original random question that will generate when page renders
app.randomQuestion = app.questions[Math.floor(Math.random()* app.questions.length)];
