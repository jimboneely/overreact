import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./QuestionGen.css";
import SimpleSlider from '../Slide/';
import firebase, {auth} from '../../firebase';

class QuestionGen extends Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user:""})
      }
    })
  };
  handler(e) {
    console.log("QuestionG-handler",e);
    this.setState({selectedImage:e});
  }
  state = {
    noun: "",
    verb: "",
    number: "",
    sentence:"",
    user:""
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  displayQuestionGenerator = () => {
    return(
      <div>
        <div className="question-body">
          <form>
            <div className="form-group">
              <h4>
                <strong>Noun</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.noun}
                name="noun"
                onChange={this.handleInputChange}
                required
              />
              <h4>
                <strong>Verb</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.verb}
                name="verb"
                onChange={this.handleInputChange}
                required
              />
              <h4>
                <strong>Number</strong>
              </h4>
              <input
                className="form-control"
                type="number"
                value={this.state.number}
                name="number"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="pull-right">
              <button
                onClick={this.handleFormSubmit}
                type="submit"
                className="btn btn-lg submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
        {this.state.sentence.length > 0 &&
          <h2>
            {this.state.sentence}
          </h2>
        }
        {this.state.sentence.length > 0 &&
          <Link to="/simpleslider"><button className="proceed-btn">Use Passphrase</button></Link>
        }
      </div>
    )
  }

  clearSentenceState = event => {
    this.setState({
      noun: "",
      verb: "",
      number: "",
      sentence:"",
      selectedImage:""
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSentence(this.state.noun,this.state.verb,this.state.number).then(data => {
      this.setState({
        sentence: data.data.sentences
      });
      console.log(data)}
    );
    this.setState({
      noun: "",
      verb: "",
      number: "",
      sentence:""
    });
  };

  addPassPhraseToFireBase = event => {
    if(this.state.user){
      const user = this.state.user;
      console.log(user.uid);
      const uid = user.uid;
      const image = this.state.selectedImage;
      firebase.database().ref('id/' + uid).push({
        passphrase : image
      });
      window.location = "/userpage"
      
    }else{<alert>You are not logged in!</alert>}
  }

  render() {

    return (

    <div>

      {this.state.sentence ?
        <div>
        <SimpleSlider sentence={this.state.sentence} handler={this.handler} />
        <h2>{this.state.sentence}</h2>
        {this.state.selectedImage?<h2>Image Selected is <img src={this.state.selectedImage} height="80" width="120" /> </h2>
          :
          <h2>Click on an image for reminder</h2>}
        <button className="proceed-btn" onClick={this.clearSentenceState}>Retry</button>
        <button className="proceed-btn" onClick={this.addPassPhraseToFireBase}>Save Passphrase</button>
        </div>
        :
        this.displayQuestionGenerator()}

    </div>

  );
  }
}
export default QuestionGen;
