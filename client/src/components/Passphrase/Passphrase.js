import React, {Component} from 'react';
import "./Passphrase.css";

class Passphrase extends Component {
  state = {
    numSentences: 1,
    numSentencePatterns: null,
    patternChoice: null,

  // hard-coded sentence patterns is the simpler way
	// TODO: make more flexible / less artificial
	sentencePatterns: [
		['article', 'adjective', 'noun', 'verb', 'adverb', 'preposition', 'article', 'noun'],
		['pronoun', 'adverb', 'verb', 'noun', 'preposition', 'article', 'noun']
	],

  languageParts: {
		'vowel': 'aeiou'.split(''),
		'article': {
			'beforeVowel': 'the|an'.split('|'),
			'beforeConsonant': 'the|a'.split('|')
		},

    'preposition': 'to|through|under|over|between|on|in|above|below|betwixt'.split('|'),
  		'adjective': 'beautiful|tall|flowing|hot|cold|fragrant|misty|bare|coarse|blind|dim|dreary|elaborate|enchanting|gleaming|glistening|green|organic|tender|cloudless'.split('|'),
  		'adverb': 'quickly|slowly|boldly|always|angrily|cheerfully|elegantly|frantically|innocently|nervously|powerfully|rarely|silently|wildly|warmly|solemly'.split('|'),
  		'noun': 'hair|finger|sun|field|arm|sphere|rock|sand|grass|tree|flower|orb|sea|water|ocean|tide|sky|cloud|moon|star|cosmos|ant|otter|elephant'.split('|'),
  		'pronoun': 'he|she|it|someone'.split('|'),
  		'verb': 'kicks|moves|swings|runs|walks|flies|sprays|stings|drops|breaks|explodes|diminishes|sweetens|falls|rises|hears|floats'.split('|'),
  		'stop': '.|?|!'.split('|'),
  		'pause': ',|;|...| - |'.split('|')
  	},

  };

  // test = props => {
  //   console.log(props);
  // };
  //
  // componentDidMount(){
  //   this.test();
  // }

  render(){
    return(
      <div>
      <p>{this.props}</p>
      <p>Here is your passphrase!</p>
      </div>
    )
  }

}


export default Passphrase;
