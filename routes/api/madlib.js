// module.exports = {
// 	bob: (req, res) => {
// 		res.status(200).json({message: 'Connected!'});
// 		console.log('Here!');
// 		function randomInt(min, max) {
// 			return Math.floor(Math.random() * (max - min + 1)) + min;
// 		};
// 		String.prototype.trim == String.prototype.trim || function() {
// 			return this.replace(/^\s+|\s+$/g, '');
// 		};
//
//
// 	}
// };
module.exports = (req, res) => {

  // -- UTILITY FUNCTIONS
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.trim == String.prototype.trim || function() {
	return this.replace(/^\s+|\s+$/g, '');
}

var noun = req.query.noun;
var verb = req.query.verb;
var number = req.query.number;
// pg = Poetry Generator
var pg = {

	// -- BEGIN CONFIG ------------------------------------------------------------
	numSentences: 1,
	numSentencePatterns: null,

	// hard-coded sentence patterns is the simpler way
	// TODO: make more flexible / less artificial
	sentencePatterns: [
		// ['article', 'adjective', 'noun', 'verb', 'adverb', 'preposition', 'article', 'noun', 'number', 'stop'],
		['article', 'adjective', 'noun', 'verb', 'article', 'noun', 'number', 'stop'],
		['pronoun', 'verb', 'noun', 'preposition', 'article', 'noun', 'number', 'stop']
	],

	languageParts: {
		'vowel': 'aeiou'.split(''),
		'article': {
			'beforeVowel': 'the|an'.split('|'),
			'beforeConsonant': 'the|a'.split('|')
		},
		'preposition': 'to|through|under|over|between|on|in|above|below'.split('|'),
		'adjective': 'beautiful|tall|flowing|hot|cold|smelly|misty|bare|hairy|blind|dim|dreary|elaborate|enchanting|gleaming|gsweaty|green|red|blue|orange|purple|organic|tender|cloudless'.split('|'),
		'adverb': 'quickly|slowly|boldly|always|angrily|cheerfully|elegantly|frantically|innocently|nervously|powerfully|rarely|silently|wildly|warmly|sadly'.split('|'),
		'noun': 'hair|finger|sun|field|arm|sphere|rock|sand|grass|tree|flower|orb|sea|water|ocean|tide|sky|cloud|moon|star|cosmos|ant|otter|elephant'.split('|'),
		'pronoun': 'he|she|it|someone'.split('|'),
		'verb': 'kicks|moves|swings|runs|walks|flies|sprays|stings|drops|breaks|explodes|falls|sweetens|falls|rises|hears|floats'.split('|'),
		'stop': '.|?|!'.split('|'),
		'pause': ',|;|...| - |'.split('|'),
		'number': '1'
	},
	// -- END CONFIG --------------------------------------------------------------

	init: function() {
		this.numSentencePatterns = this.sentencePatterns.length;
	},

	addRequiredWordToSentence: function(type, requiredWord, sentence){
		for(var i = 0; i < sentence.length; i++){
			let word = sentence[i];
			if(word.type == type){
				word.word = requiredWord;
				break;
			}
		}
	},

	generateSentences: function( userNoun, userVerb, userNumber, numSentences, markupBefore, markupAfter) {
		var numSentences = numSentences || this.numSentences;
		var markupBefore = markupBefore || '';
		var markupAfter = markupAfter || '';
		var sentences = [];

		while (numSentences--){
			var sentence = [];
			var sentencePattern = this.sentencePatterns[ randomInt(0, this.numSentencePatterns - 1) ];

			// loop through sentence pattern array
			for (var i = 0, length = sentencePattern.length; i < length; i++) {
				var languagePartArray;
				var articleType;
				var nextWord = null;

				// if this word is an article, need to determine if next word starts with a vowel or consonant
				if (sentencePattern[i] === 'article') {
					// get next word
					var nextWordLanguagePartArray = this.languageParts[ sentencePattern[i + 1] ];
					var nextWord = nextWordLanguagePartArray[ randomInt(0, nextWordLanguagePartArray.length - 1) ];
					// set article type based on whether next word starts with vowel or consonant
					if (this.languageParts['vowel'].indexOf(nextWord[0]) !== -1) {
						articleType = 'beforeVowel';
					} else {
						articleType = 'beforeConsonant';
					}

					languagePartArray = this.languageParts[ sentencePattern[i] ][ articleType ];
				} else {
					// console.log('here', sentencePattern[i]);
					if (sentencePattern[i] == "noun"){
						languagePartArray
					}
					languagePartArray = this.languageParts[ sentencePattern[i] ];
				}

				// add this word to sentence
				sentence.push({ word: languagePartArray[ randomInt(0, languagePartArray.length - 1) ],
											type: sentencePattern[i]}) ;
				//console.log(sentence);

				// if next word was gotten, also add next word to sentence and increment the i counter
				if (nextWord !== null) {
					sentence.push({word: nextWord,
												type: sentencePattern[i+1]});
					i++;
				}
			}

			this.addRequiredWordToSentence("noun", noun, sentence);
			this.addRequiredWordToSentence("verb", verb, sentence);
			this.addRequiredWordToSentence("number", number, sentence);
			// console.log(sentence);

			let renderedSentence = '';
			sentence.forEach(function(word){
				renderedSentence += word.word;
				renderedSentence += ' ';
			})
			sentences.push(markupBefore + renderedSentence + markupAfter);
			// console.log(sentence);

		} // end while (numSentences--)

		return sentences;
		// res.status(200).json({sentences});

	} // end generateSentences()
}
pg.init();
res.json({sentences: pg.generateSentences(noun, verb, number)});
};
