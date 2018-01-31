import axios from "axios";

export default  {
sendQuery: params => {
    let sentence = ['This', 'is', 'a', 'noun'];
    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i] == 'noun') {
        sentence[i] = params
      }
    }
    console.log(sentence);
    alert(sentence);
  },

getSentence: (noun, verb, number) => {
  return axios.get(`/api/noun?noun=${noun}&verb=${verb}&number=${number}`);
}

};
